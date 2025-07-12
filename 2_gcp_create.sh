# create unique storage bucket name
RANDOM_SUFFIX=$(head /dev/urandom | tr -dc a-z0-9 | head -c5)
BUCKET_NAME="assets-$RANDOM_SUFFIX"
echo "Your storage bucket name is: $BUCKET_NAME, add to your 1_env.sh file"
# create service account
gcloud iam service-accounts create "asset-service" --project="$PROJECT_ID" \
    --description="Service account to manage asset data." \
    --display-name="Asset Service"
# assign roles
gcloud projects add-iam-policy-binding $PROJECT_ID --member="serviceAccount:asset-service@$PROJECT_ID.iam.gserviceaccount.com" --role='roles/storage.admin'
gcloud projects add-iam-policy-binding $PROJECT_ID --member="serviceAccount:asset-service@$PROJECT_ID.iam.gserviceaccount.com" --role='roles/logging.logWriter'
gcloud projects add-iam-policy-binding $PROJECT_ID --member="serviceAccount:asset-service@$PROJECT_ID.iam.gserviceaccount.com" --role='roles/run.builder'
# assign roles to build to default compute account
PROJECTNUMBER=$(gcloud projects describe $PROJECT_ID --format="value(projectNumber)")
gcloud projects add-iam-policy-binding $PROJECT_ID --member="serviceAccount:$PROJECTNUMBER-compute@developer.gserviceaccount.com" --role='roles/storage.objectUser'
gcloud projects add-iam-policy-binding $PROJECT_ID --member="serviceAccount:$PROJECTNUMBER-compute@developer.gserviceaccount.com" --role='roles/artifactregistry.writer'
gcloud projects add-iam-policy-binding $PROJECT_ID --member="serviceAccount:$PROJECTNUMBER-compute@developer.gserviceaccount.com" --role='roles/logging.logWriter'
# create storage bucket
gcloud storage buckets create gs://$BUCKET_NAME --location=$REGION --project $PROJECT_ID
# create docker registry
gcloud artifacts repositories create docker-registry --repository-format=docker \
  --location="$REGION" --description="Asset registry" --project="$PROJECT_ID"
# create cloud run deployment yaml
cp cloud-run.yaml cloud-run.local.yaml
sed -i "/      serviceAccountName: /c\      serviceAccountName: asset-service@$PROJECT_ID.iam.gserviceaccount.com" cloud-run.local.yaml
sed -i "/      - image: /c\      - image: $REGION-docker.pkg.dev/$PROJECT_ID/docker-registry/asset-service" cloud-run.local.yaml
sed -i "/            bucketName: /c\            bucketName: $BUCKET_NAME" cloud-run.local.yaml
sed -i "s/YOUR_FIREBASE_API_KEY/$FIREBASE_API_KEY/g" cloud-run.local.yaml
sed -i "s/YOUR_FIREABSE_AUTH_DOMAIN/$FIREBASE_AUTH_DOMAIN/g" cloud-run.local.yaml
# create superplug sheets config file
cp config.yaml config.local.yaml