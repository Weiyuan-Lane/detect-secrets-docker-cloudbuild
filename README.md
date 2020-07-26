
# detect-secrets-docker-cloudbuild

This repository represents a simple example of how you can use [detect-secrets-docker](https://github.com/Weiyuan-Lane/detect-secrets-docker) along with your Google's [Cloud Build](https://cloud.google.com/cloud-build)

The basefiles are already added to the repository

Using [detect-secrets-docker](https://github.com/Weiyuan-Lane/detect-secrets-docker), push the CI docker image using the following command (replacing with the project id):

```
docker push gcr.io/{GCP_PROJECT_ID}/detect-secrets-docker-ci:latest
```

## cloudbuild.yaml

An example of passed and failed builds:

![CloudBuild Dashboard](https://user-images.githubusercontent.com/3222800/88486482-6b52be80-cfb0-11ea-9500-323bac193bd3.png)

Cloud Build uses either a Dockerfile, or a YAML file. You can use the provided `cloudbuild.yaml`  file as-is, but feel free to amend it as necessary to suit your usage.

Note that the configuration consists of two steps. The first is to unshallow the repository (Cloud Build fetchs a shallow clone of the repository for the build pipeline). This is required for comparisons of files to detect for secrets

The second step is to validate for the presence of secrets!

---

If a secret is found, you'll see something like the following, with a helpful message on the affected lines where the secrets are:

![failed](https://user-images.githubusercontent.com/3222800/88486498-a5bc5b80-cfb0-11ea-9bbc-7ff876ad93c3.png)

---

Remove the affected lines of code, or [update your baseline files](https://github.com/Weiyuan-Lane/detect-secrets-docker#update-the-baseline-file), and your builds should pass !

![success](https://user-images.githubusercontent.com/3222800/88486495-9ccb8a00-cfb0-11ea-9fff-0920e3f7a653.png)


