
# detect-secrets-docker-cloudbuild

This repository represents a simple example of how you can use [detect-secrets-docker](https://github.com/Weiyuan-Lane/detect-secrets-docker) along with your Google's [Cloud Build](https://cloud.google.com/cloud-build)

The basefiles are already added to the repository

Using [detect-secrets-docker](https://github.com/Weiyuan-Lane/detect-secrets-docker), push the CI docker image using the following command (replacing with the project id):

```
docker push gcr.io/{GCP_PROJECT_ID}/detect-secrets-docker-ci:latest
```

Amend `cloudbuild.yaml` as necessary as well
