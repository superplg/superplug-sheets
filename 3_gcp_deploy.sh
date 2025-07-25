# copy config file to storage
gcloud storage cp config.local.yaml gs://$BUCKET_NAME
# submit build
gcloud builds submit --tag "$REGION-docker.pkg.dev/$PROJECT_ID/docker-registry/asset-service" --project $PROJECT_ID
# deploy
# create cloud run deployment yaml
cp cloud-run.yaml cloud-run.local.yaml
sed -i "/      serviceAccountName: /c\      serviceAccountName: asset-service@$PROJECT_ID.iam.gserviceaccount.com" cloud-run.local.yaml
sed -i "/      - image: /c\      - image: $REGION-docker.pkg.dev/$PROJECT_ID/docker-registry/asset-service" cloud-run.local.yaml
sed -i "/            bucketName: /c\            bucketName: $BUCKET_NAME" cloud-run.local.yaml
sed -i "s/YOUR_FIREBASE_API_KEY/$FIREBASE_API_KEY/g" cloud-run.local.yaml
sed -i "s/YOUR_FIREABSE_AUTH_DOMAIN/$FIREBASE_AUTH_DOMAIN/g" cloud-run.local.yaml
gcloud run services replace cloud-run.local.yaml --project $PROJECT_ID --region $REGION
# set public access
echo | gcloud run services set-iam-policy asset-service cloud-run-policy.yaml --project $PROJECT_ID --region $REGION