# copy config file to storage
gcloud storage cp config.local.yaml gs://$BUCKET_NAME
# submit build
gcloud builds submit --tag "$REGION-docker.pkg.dev/$PROJECT_ID/docker-registry/asset-service" --project $PROJECT_ID
# deploy
gcloud run services replace cloud-run.local.yaml --project $PROJECT_ID --region $REGION
# set public access
echo | gcloud run services set-iam-policy asset-service cloud-run-policy.yaml --project $PROJECT_ID --region $REGION