# Deploy

## Docker

### Build
```bash
# dir
$ cd build
# permission
$ chmod +x build.sh
# build
$ ./build.sh
```

### Deploy
```bash
$ docker stack deploy -c docker-compose.yaml grpc-nestjs
```

### Log
```bash
$ docker service logs grpc-nestjs_api-gateway -t -f
```

---

## Kubernetes

### Deploy
```bash
$ kubectl apply -f deploy.yaml
```

### Log
```bash
$ kubectl logs service/api-gateway --namespace grpc-nestjs
```
