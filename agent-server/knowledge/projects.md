# Projects

This section summarizes selected software engineering, machine learning, and data visualization projects developed by Natalia Ramirez.

Additional projects and source code can be found on GitHub:

GitHub:  
https://github.com/naramirezj

---

# Portfolio Optimization with Machine Learning

A machine learning pipeline designed to forecast financial asset returns using historical market data and engineered financial indicators.

The project builds predictive models using multiple machine learning algorithms and combines predictions with portfolio optimization techniques to generate risk-efficient investment allocations.

The workflow includes:

- Data collection and preprocessing of financial market datasets
- Feature engineering using statistical indicators and rolling windows
- Training multiple predictive models
- Combining model predictions through ensemble techniques
- Applying mean-variance portfolio optimization

The final system produces portfolio allocations that balance expected return with risk using covariance estimates.

Technologies:
- Python
- pandas
- NumPy
- scikit-learn

---

# PII Log Anonymization System

A command-line tool designed to detect and anonymize personally identifiable information (PII) in application logs before storage or analysis.

The system combines traditional pattern-based detection with machine learning-based contextual analysis.

The architecture includes:

- Regex-based pattern matching for structured PII detection
- An LLM model hosted locally using Ollama in Docker for contextual PII detection
- Batch processing through a CLI interface
- Integration with cloud log processing pipelines

The goal of the project is to provide automated anonymization of sensitive logs before they are stored in centralized logging systems.

Technologies:
- Python
- Docker
- Ollama
- AWS
- Jenkins CI/CD

---

# Word2Vec Sentiment Analysis Pipeline

A natural language processing project that implements sentiment classification using Word2Vec embeddings.

The system processes textual data and transforms words into vector embeddings using Word2Vec. These embeddings are then used as input features for a classification model.

Pipeline components include:

- Text preprocessing and tokenization
- Word2Vec embedding training
- Sentiment classification using support vector machines
- Model evaluation and optimization

The trained model was exported to **CoreML** so that sentiment predictions could run efficiently on mobile devices.

Technologies:
- Python
- gensim
- scikit-learn
- CoreML

---

# Airbnb Market Analysis (Shiny Application)

An interactive data visualization platform for analyzing Airbnb markets across four cities in California:

- Big Bear Lake
- Big Bear City
- Joshua Tree
- Yucca Valley

The application allows users to explore important Airbnb performance metrics including:

- nightly rental rates
- occupancy rates
- property characteristics
- revenue comparisons between cities

Users can filter data by property features such as number of bedrooms or bathrooms to better understand how property attributes influence revenue.

The data pipeline included:

- cleaning and transforming raw Airbnb datasets
- building interactive visualizations
- deploying a Shiny application for user interaction

Technologies:
- R
- Shiny
- data visualization libraries

Repository:  
https://github.com/naramirezj/SoftwareDev_Project

---

# IGE Off-Campus Program Visualization

A Shiny application designed to help current and prospective Grinnell College students explore international study programs offered by the **Institute for Global Engagement (IGE)**.

The application includes six interactive visualizations showing different aspects of the off-campus program offerings.

One of the key components I developed was an interactive geographic map built using **Leaflet**. The map displays all available programs across the world and uses clustering to group nearby locations.

Users can click clusters to reveal individual city markers and view detailed information about each program.

The project focuses on making institutional data easier to explore through interactive visualizations.

Technologies:
- R
- Shiny
- Leaflet mapping library

Application:  
https://caitlinabreu.shinyapps.io/IGE_and_Off_Campus_Study_Visualizations/

---

# CSLovers – Engineering Job Search Android App

A mobile Android application developed to personalize the engineering job search experience.

The app asks users to input job preferences such as:

- desired job location
- experience level
- subject area or specialization

Based on these preferences, the application generates a personalized list of relevant engineering job opportunities.

Users can:

- view job descriptions
- apply directly through links
- save interesting positions as “loved” jobs for later review

The project demonstrates mobile development, user interface design, and API-driven data retrieval.

Technologies:
- Kotlin
- Android Studio
- mobile UI development

Repository:  
https://github.com/naramirezj/CSLovers

---

# Space Shooting Web Game

A browser-based game built using WebGL and Kotlin where the player controls a spaceship that must eliminate alien enemies.

Game objects such as the spaceship, enemies, and projectiles are rendered as **quads using GLSL shaders**.

The game includes basic physics interactions and movement mechanics. The spaceship can move in four directions using propulsion and fire projectiles to eliminate aliens that follow the player.

The project demonstrates low-level graphics programming and shader-based rendering.

Technologies:
- WebGL
- Kotlin
- GLSL

Repository:  
https://github.com/naramirezj/SpaceShootingGame

---

# GPU Multithreaded Sudoku Solver

A high-performance Sudoku solver implemented using **CUDA GPU parallelism**.

The algorithm assigns a thread to each cell of the Sudoku board. Each thread analyzes constraints derived from the cell’s row, column, and subgrid to determine valid candidate values.

By leveraging GPU parallelization, the system can solve approximately **one million Sudoku boards per second**.

This project demonstrates understanding of:

- GPU programming
- constraint propagation algorithms
- massively parallel computation

Technologies:
- C
- CUDA
- GPU parallel computing

---

# Multithreaded Frogger (Terminal Game)

A multithreaded implementation of the classic Frogger game designed to run in the terminal.

The game uses CPU thread parallelism to manage different aspects of gameplay including:

- player movement
- obstacle generation
- rendering updates
- input handling

Thread synchronization techniques ensure correct timing and safe access to shared state.

The project demonstrates knowledge of concurrent programming and thread synchronization.

Technologies:
- C
- POSIX threads
- terminal-based rendering