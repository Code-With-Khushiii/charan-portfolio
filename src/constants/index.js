export const myProjects = [
  {
    id: 1,
    title: "Real Time Recommender System — Kafka, Storm, Cassandra",
    discription:
      "Crafted a distributed, low-latency recommender pipeline processing 1M+ events/sec via Kafka and Storm, storing real-time user interactions in Cassandra to deliver instant recommendations.",
    href: "https://github.com/saicharanvarmadandu/real-time-recommender",
    image: "",
    tags: [
      { id: 1, name: "Jupyter Notebook" },

      { id: 2, name: "Python" },
      { id: 3, name: "HTML" },
      { id: 4, name: "CSS" },
      { id: 4, name: "javascript" },
    ],
  },
  {
    id: 2,
    title: "Live Product Recommendation Platform — Spark, Kafka, MongoDB, Flask",
    discription:
      "Built an end-to-end data streaming platform using Spark and Kafka to generate personalized product recommendations, visualized live via a Flask UI backed by MongoDB.",
    href: "https://github.com/saicharanvarmadandu/StreamlineSuggest-Real-Time-Product-Recommendation-System-Using-Apache-Spark-Kafka-MongoDB-and-Flask",
    image: "",
    tags: [
      { id: 1, name: "Scala" },
      { id: 2, name: "Shell" },
      { id: 3, name: "Dockerfile" },
    
    ],
  },
];

export const mySocials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/scvd/",
    icon: "/assets/socials/linkedIn.svg",
  },
];

export const experiences = [
  {
    title: "Azure Data Engineer",
    job: "Hallmark Financial Services",
    date: "Jul. 2024 – Present",
    location: "Fort Worth, TX",
    contents: [
      "Created and optimized data pipelines and warehouses on Azure (Data Factory, Synapse, Fabric, Stream Analytics, Data Lake Storage, Cosmos DB, Key Vault), improving processing speed by 35%, reducing query time by 40%, and cutting storage costs with partitioning and compression.",
      "Orchestrated batch and streaming ETL pipelines with Spark, Databricks, Kafka, and Hadoop, processing multi-terabyte datasets daily, achieving sub-second real-time ingestion, and standardizing error handling for higher reliability.",
      "Established CI/CD pipelines using Azure DevOps, Jenkins, Terraform, and Kubernetes, cutting deployment timelines by 50%, ensuring reproducible, version-controlled releases, and supporting rapid experimentation in production.",
      "Developed interactive, self-service analytics dashboards with Tableau, Power BI, and Looker, integrating Azure and Snowflake datasets to deliver real-time KPI visibility that accelerated C-suite decision-making by 40% and reduced reliance on manual reporting.",
      "Partnered with cross-functional stakeholders (finance, actuarial, IT, and data science teams) to translate business requirements into scalable data products, enabling predictive analytics, machine learning pipelines, and operational cost reductions through data-driven automation.",
    ],
  },
  {
    title: "AWS Data Engineer",
    job: "Tenet Healthcare Corporation",
    date: "Nov. 2022 – Jun. 2024",
    location: "Dallas, TX",
    contents: [
      "Engineered and automated ETL pipelines with AWS Glue, Snowflake, RDS, DynamoDB, EMR, Athena, IAM, and Step Functions, cutting data preparation time by 45% and supporting ML and analytics pipelines.",
      "Scaled real-time ingestion platforms with Amazon Kinesis and Kafka, increasing streaming throughput by 50% and ensuring uninterrupted availability of patient, clinical, and operational data for downstream analytics and compliance reporting.",
      "Architected cloud-native data warehouses on Amazon Redshift, shortening query response times by 40%, enabling cross-cloud federated queries, and supporting enterprise-wide analytics for financial forecasting and patient care optimization.",
      "Deployed automated CI/CD pipelines using AWS CodePipeline, Azure DevOps, and Jenkins, integrating infrastructure-as-code with Terraform, Kubernetes, and Databricks workflows to streamline releases by 55%, eliminate manual deployment bottlenecks, and ensure consistent, error-free production rollouts.",
    ],
  },
  {
    title: "GCP Data Engineer",
    job: "Lumen Technologies (Accenture)",
    date: "Sep. 2021 – Jul. 2022",
    location: "Hyderabad, India",
    contents: [
      "Architected data pipelines across GCP (BigQuery, Dataflow, Dataproc), boosting processing efficiency by 45% and enhancing analytics query performance by 40%.",
      "Automated ETL and streaming workflows with Spark, Kafka, Pub/Sub, Informatica, Snowflake, and Python, handling ingestion volumes exceeding 10M records per day and raising integration throughput by 50% to support real-time reporting.",
      "Delivered BI dashboards in Power BI, Tableau, and Looker, linked to GCP platforms and Databricks pipelines, while enforcing CI/CD pipelines, RBAC, and compliance (GDPR, CCPA) to ensure secure, scalable data delivery.",
    ],
  },
  {
    title: "Data Engineer",
    job: "Boeing",
    date: "Jun. 2019 – Jul. 2021",
    location: "Hyderabad, India",
    contents: [
      "Designed and optimized high-volume data pipelines using Python, PySpark, Hive SQL, Snowflake, Presto, and Cassandra/HDFS, integrating over 10M daily records and improving enterprise query efficiency by 40%.",
      "Streamlined ETL workflows with Spark, Hive, and SSIS, integrating structured and unstructured data sources and cutting transformation time by 50% through advanced SQL and Python-based data cleansing.",
      "Deployed cloud-native architectures with AWS, Docker, Kubernetes, and Jenkins CI/CD, while delivering Tableau dashboards powered by BigQuery and Presto SQL, accelerating business decision-making speed by 30%.",
    ],
  },
];
