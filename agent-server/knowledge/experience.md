# Professional Experience

## Software Engineer – Genesys Cloud

Genesys Cloud is a large-scale global communications platform supporting millions of users and organizations worldwide. My work focuses on building distributed systems that power telephony services, partner integrations, and internal operational tooling.

### Distributed Telephony Infrastructure

Design and develop full-stack telephony features for a global cloud communications platform supporting over two million users. These systems handle call routing, phone number management, and integrations with third-party communications services.

Build backend microservices using **Java Spring Boot**, REST APIs, and **AWS cloud infrastructure**. Services are designed to operate reliably across multiple AWS regions with strict latency and resiliency requirements.

### Disaster Recovery and Multi-Region Reliability

Implemented disaster recovery capabilities for phone number rerouting across **15 AWS regions**. This system ensures that communication services remain operational even during regional outages.

The solution leverages:

- DynamoDB Global Tables
- Lambda streams
- Kafka consumers
- Java and Python microservices

This architecture enables automatic phone number reassignment and service continuity during failures.

### Real-Time Metrics Pipeline

Developed a **low-latency metrics ingestion pipeline** capable of delivering metrics with approximately **20 ms latency**.

This involved:

- Implementing **Redis Lua scripts** for atomic metric aggregation
- Redesigning Kafka ingestion pipelines
- Introducing multithreaded parallel processing
- Optimizing SQL write throughput

These improvements significantly increased real-time visibility into platform performance.

### Microsoft Teams Partner Integration

Led development of a partner-facing authentication integration with **Microsoft Teams**.

This system automates domain verification required for telephony trunk integration by programmatically generating temporary DNS TXT and A records using AWS Route53.

The automation eliminated manual DNS configuration steps and significantly accelerated third-party onboarding.

### Data Integrity and Migration Systems

Developed a **phone number reconciliation system** used during DynamoDB global table migrations.

The system detects inconsistencies between replicated tables and identifies discrepancies across customer organizations.

Monitoring and alerting were integrated through **SumoLogic**, enabling engineers to quickly identify and resolve data inconsistencies.

### Operational Visibility Tools

Designed and implemented an **operation-tracking database** used to analyze failures in large batch workflows.

Results are surfaced through an internal web dashboard used by over **50 engineering teams**, improving debugging efficiency and making it easier to identify workflow failures or processing discrepancies.

Technologies used:

- Java backend services
- Ember.js frontend
- SQL databases

### Production Ownership

Own features end-to-end from system design through deployment and monitoring.

Responsibilities include:

- Designing resilient architectures
- Implementing feature flags and rollout strategies
- Conducting security and reliability reviews
- Monitoring services via **SumoLogic and New Relic**
- Optimizing system latency and error rates

### On-Call Operations

Serve as an on-call engineer responsible for maintaining reliability of seven core services.

Using **PagerDuty**, I respond to production incidents, debug failures in distributed systems, and implement long-term reliability improvements.

---

# Academic Experience

## Machine Learning Coursework – Grinnell College

During my Computer Science degree at Grinnell College, I completed coursework in **Machine Learning and statistical modeling**.

The course covered the full machine learning workflow including:

- Data cleaning
- Feature engineering
- Dimensionality reduction (PCA)
- Model evaluation and validation
- Training pipelines

Models studied included:

- K-Nearest Neighbors
- Support Vector Machines
- Random Forests
- Clustering algorithms

Datasets used in coursework included:

- Email spam classification
- Breast cancer imaging datasets
- Computer vision datasets
- Housing price prediction datasets

### Final Project – Portfolio Optimization with Machine Learning

For my final project, I built a predictive modeling pipeline designed to forecast asset returns from historical financial data.

The system included:

- Feature-engineered signals derived from market data
- Multiple machine learning models
- Ensemble prediction techniques

Predictions were then integrated with **mean-variance portfolio optimization** to generate risk-efficient investment allocations.

Technologies used:

- Python
- NumPy
- pandas
- scikit-learn