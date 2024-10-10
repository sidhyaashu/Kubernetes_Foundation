## Kubernetes Foundation

Kubernetes (often abbreviated as K8s) is an open-source container orchestration platform designed to automate the deployment, scaling, and management of containerized applications. It was originally developed by Google and is now maintained by the Cloud Native Computing Foundation (CNCF). Kubernetes helps developers efficiently manage applications that run in containers across a distributed cluster of machines.

1. # Key Features of Kubernetes:
    - **Automated Container Deployment and Scaling**: Kubernetes automates the deployment, scaling, and monitoring of containerized applications, ensuring they are always up and running.

    - **Service Discovery and Load Balancing**: K8s provides service discovery for containers and automatically load balances network traffic to ensure stable application performance.

    - **Self-healing**: If a container crashes or becomes unresponsive, Kubernetes automatically restarts or replaces it to maintain desired application states.

    - **Automated Rollouts and Rollbacks**: Kubernetes can automatically manage rolling updates for applications, ensuring minimal downtime, and roll back to a previous version if something goes wrong.

    - **Storage Orchestration**: Kubernetes allows you to mount and manage storage resources (local, cloud, or network) for containers, enabling persistent storage for stateful applications.

    - **Configuration Management**: K8s allows applications to store configuration settings in secrets or config maps, making it easier to manage sensitive information and environment-specific data.

    - **Horizontal Scaling**: Kubernetes can scale applications horizontally by automatically increasing or decreasing the number of running instances based on demand.

    - **Container Scheduling**: Kubernetes determines the optimal node within the cluster to run a container based on factors like available resources and specific policies.

2. # Kubernetes Architecture:
    - **Cluster**: The basic unit of Kubernetes, consisting of a master node (control plane) and multiple worker nodes where the containers run.
    - **Nodes**: Machines (either physical or virtual) that run the containerized applications.
    - **Master Node**: Manages the cluster and is responsible for scheduling containers, monitoring the cluster state, and managing changes.
        - 1. API SERVER - assign node to newly create pods
        - 2. SCHEDULAR - key value store
        - 3. ETCD
        - 4. CONTROL MANAGER
    - **Worker Node**: Runs the containers and reports back to the master.
        - 1. KUBELET - Agent , make sure containers running in pods
        - 2. KUBE PROXY - maintain network rules for communication with pods
        - 3. CONTAINER RUNTIME - resposible for running containers(Docker)

3. # Main Components:
    - **Pods**: The smallest and most basic unit in Kubernetes, which can contain one or more containers that share the same network and storage.
    - **Services**: Abstracts and defines a stable network endpoint for a set of pods to facilitate load balancing and service discovery.
    - **Deployments**: Allows you to define the desired state for your application and automates the process of deploying and updating containers.
    - **ConfigMaps and Secrets**: Store configuration data and sensitive information (like passwords or API keys) in a secure and manageable way.
    - **Namespaces**: Provide logical isolation within a cluster to divide resources among multiple users or teams.
    - **Ingress**: Manages external access to services within the cluster, typically HTTP and HTTPS, and provides load balancing, SSL termination, and more.

4. # Kubernetes Use Cases:
    - **Microservices Management**: Running microservices architecture with containers.
    - **CI/CD Pipelines**: Automating the testing, deployment, and rollback of applications.
    - **Hybrid Cloud Solutions**: Running applications across on-premise and cloud environments.
    - **High Availability Applications**: Ensuring that applications remain available even during failures or high loads.

5. # Kubernetes Ecosystem:
There are numerous tools in the Kubernetes ecosystem, including:
 - **Helm**: Package manager for Kubernetes to define, install, and manage Kubernetes applications.
 - **Prometheus**: Monitoring and alerting tool, often used with Kubernetes.
 - **Istio**: Service mesh that provides traffic management, security, and observability for microservices.
 - **Kustomize**: Tool for customizing Kubernetes configurations.

Kubernetes has become the de facto standard for container orchestration, offering scalability, resiliency, and flexibility for modern cloud-native applications. It is widely adopted by enterprises for managing complex distributed systems.

# Before start install:
- 1. Kubernetes
- 2. minikube

## Minikube
Minikube is a lightweight Kubernetes implementation that allows developers to run a Kubernetes cluster locally on their personal machines. It is designed to provide a simple and convenient way to experiment with Kubernetes, develop applications, and test them in a local environment without needing to set up a full-blown Kubernetes cluster on cloud or on-premises infrastructure.

# STEPS:
To create a pod in Kubernetes using Minikube on Windows, follow these steps:

- Step 1: Start Minikube
Make sure Minikube is started by running:

```bash
minikube start
```
- Step 2: Create a Pod Manifest (YAML File)
You need a YAML file that defines the pod configuration. Here's an example pod.yaml for a simple Nginx pod:

```bash
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
spec:
  containers:
  - name: nginx-container
    image: nginx:latest
    ports:
    - containerPort: 80
```
Save this file as pod.yaml.

- Step 3: Apply the Pod Configuration
Run the following command in your terminal or command prompt to create the pod:

```bash
kubectl apply -f pod.yaml
```
- Step 4: Verify the Pod is Running
Check the status of the pod using:

```bash
kubectl get pods
```
- Step 5: View Pod Details
For more detailed information about the pod:

```bash
kubectl describe pod nginx-pod
```
Make sure you have Kubernetes and Minikube installed, and the Minikube cluster is running before applying the pod configuration.

# Using CMD
```bash
kubectl create deployment <name_app> --image=<image_name>:<tag>
```
- after create run:
```bash
kubectl get deployments
```

- To get the pods:
```bash
kubectl get pods
```

- To see Dashboard:
```bash
minikube dashboard
```

- To assign port for expose:
```bash
kubectl expose deployment <name_app> --port=<image_port> --type=LoadBalancer
```
- image_port : port of the image like nginx is 80
- type : Different types are available

- next:
```bash
kubectl get services
```
```bash
minikube service <name_app>
```
- After that you will get an IP address or URL


# UP NEXT:
- After creating project make docker image and push to dockerhub cz Kubernetes not deals with local image
- Check minikube status by "minikube status" command

- If all running make depeloyment
```bash
kubectl create deployment <name_app> --image=<image_name>:<tag>
```

- After create to see depeloyment & check running or not (it's take time):
```bash
kubectl get deployments
```

- To see logs in your terminal:
```bash
kubectl logs <app_name>
```
- To Expose services:
```bash
kubectl expose deployment <name_app> --type=LoadBalancer --port=<exposedport>
```
- To see services:
```bash
kubectl get services
```
- To run services:
```bash
minikube service <app_name>
```

- Congratulations Now you can see your app



## NEXT - UPDATE YOUR APP
- Update your app

1. No to set Image:
```bash
kubectl set image deployment <app_name> <container_name>=<dockerhub_username>/<newImage_name>:<tag>
```
2. see the status
```bash
kubectl get pods
```
- now you can see the old version is terminating and new is running

- Congratulations Now you can see your updated app


# Rollback and Rollout
```bash
kubectl rollout status deployment <app_name>
```
- Check the status and next undo the deployment if stuck

```bash
kubectl rollout undo deployment <app_name>
```


# delete service
```bash
kubectl delete service server
```


## Self Healing
In Kubernetes, the self-healing factor refers to the system's ability to automatically detect and fix issues with applications running in containers. Here’s how it works in simple terms:

- Monitoring: Kubernetes constantly checks the health of the containers and the nodes (the servers where the containers run).

- Automatic Restarts: If a container crashes or becomes unresponsive, Kubernetes automatically restarts it without any manual intervention.

- Replacing Failed Nodes: If a node goes down, Kubernetes can automatically reschedule the affected containers onto other healthy nodes.

- Maintaining Desired State: You define the desired state of your application (like how many replicas of a service should run). Kubernetes ensures that this state is maintained. If any container goes down, Kubernetes will start a new one to replace it.


# scaling
Scaling in Kubernetes refers to adjusting the number of replicas (instances) of a particular application (like a deployment) to handle more or less traffic. Here’s a simple explanation of scaling in both Kubernetes and Minikube, along with the commands you can use:

Scaling in Kubernetes
Increase Replicas: If your application needs to handle more requests, you can increase the number of replicas. This means more instances of your application will run, distributing the load.

Decrease Replicas: If you have fewer requests, you can reduce the number of replicas to save resources.

**Commands for Scaling in Kubernetes**
To scale up (increase replicas):

```bash
kubectl scale deployment <deployment-name> --replicas=<number>
```
For example, to set the deployment named my-app to 5 replicas:

```bash
kubectl scale deployment my-app --replicas=5
```
To scale down (decrease replicas): You can use the same command but specify a lower number:

```bash
kubectl scale deployment my-app --replicas=2
```
To see pods:

```bash
kubectl get pods
```

# Delete pods
1. Delete pods:
```bash
kubectl delete pod <pod_name>
```

2. Delete all pods under a specific deployment:
```bash
kubectl delete deployment <deployment-name>
```

# Deployment config file
```bash
https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#deployment-v1-apps
```
- make yml file 

```bash
kubectl apply -f deployment-server.yml
```
- see the pods
```bash
kubectl get pods
```

# Service config file
```bash
https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#service-v1-core
```
- make yml file 

```bash
kubectl apply -f service-server.yml
```
```bash
kubectl get services
```
- Run service
```plaintext
E:\Kubernets\Kubernetes_Foundation>kubectl get services
NAME         TYPE           CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
kubernetes   ClusterIP      10.96.0.1       <none>        443/TCP          4h19m
server       LoadBalancer   10.104.50.214   <pending>     3000:30139/TCP   8s
```

```bash
minikube service <NAME>
```

- Delete deployment
```bash
kubectl delete -f deployment-server.yml
```