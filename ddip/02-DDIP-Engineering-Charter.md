# DDIP Engineering Charter
## Universal Data Intelligence Platform
### Architecture & Repository Contract

---

# Objective

DDIP (DeTLeng Data Intelligence Platform) is a universal Business Intelligence platform capable of connecting to enterprise data warehouses and allowing business users to ask questions in natural language.

The platform must never be hardcoded for a specific dataset.

The platform must adapt to customer warehouses through metadata, semantic intelligence, and dynamic SQL generation.

This document defines the engineering contract that every repository must follow.

No repository may violate this architecture.

---

# Engineering Philosophy

Current Case Study 003 is the reference implementation.

DDIP is the evolution of that architecture.

We are NOT building a chatbot.

We are NOT building another SQL generator.

We are building a Universal Data Intelligence Platform.

Every engineering decision must support this vision.

---

# Technology Stack

Language

- Python

Backend

- FastAPI

LLM

- OpenAI Responses API

Protocol

- Model Context Protocol (MCP)

Primary Warehouse

- Google BigQuery

Future Warehouses

- Snowflake
- SQL Server
- PostgreSQL
- Databricks
- Redshift

Deployment

- Render

Source Control

- GitHub

Vector Database

(To be selected later)

---

# Engineering Principles

1. Modular architecture

2. One repository = one responsibility

3. Loose coupling

4. High cohesion

5. No business logic duplication

6. Reusable components

7. Enterprise documentation

8. Repository independence

9. Repository testability

10. Customer warehouse independence

---

# Platform Layers

Presentation Layer

↓

Gateway Layer

↓

Business Intelligence Layer

↓

Semantic Intelligence Layer

↓

Metadata Layer

↓

Vector Intelligence Layer

↓

SQL Generation Layer

↓

Validation Layer

↓

MCP Layer

↓

Warehouse

---

# Repository Strategy

Repositories will be created one by one.

No repository should assume the existence of future repositories.

Each repository must expose clear interfaces and remain independently testable.

Repositories must integrate through contracts rather than implementation details.

---

# Initial Repository Roadmap

1. ddip-core

2. ddip-builder

3. ddip-semantic-engine

4. ddip-sql-engine

5. ddip-validation-engine

6. ddip-vector-engine

7. ddip-mcp

8. ddip-backend

Repositories may evolve, but responsibilities must remain stable.

---

# Repository Independence

Every repository must:

Have its own README

Have its own architecture document

Have its own requirements

Have its own tests

Have its own CHANGELOG

Be deployable or usable independently where applicable.

---

# Dependency Rules

Allowed

Backend
↓

Semantic

↓

Core

Allowed

Builder
↓

Core

Allowed

MCP
↓

Core

Not Allowed

Core importing Backend

Not Allowed

Core importing Builder

Not Allowed

Semantic importing Backend

Dependencies must always flow downward.

---

# Render Deployment Strategy

GitHub stores source code only.

Render hosts running services.

APIs execute on Render.

GitHub never hosts running applications.

---

# Data Warehouse Strategy

DDIP must never assume:

Table names

Column names

Schema names

Dataset names

Warehouse vendors

Every customer warehouse is different.

The platform must discover and understand the warehouse dynamically.

---

# Metadata First

Every warehouse onboarding starts with metadata.

No SQL generation before metadata exists.

No semantic reasoning before metadata exists.

Metadata is the foundation of the platform.

---

# Semantic First

Business questions are translated into semantic concepts.

Semantic concepts are translated into warehouse metadata.

Metadata is translated into SQL.

SQL is never generated directly from user prompts.

---

# SQL Rules

Generated SQL must:

Be validated

Be explainable

Be safe

Be cost-aware

Be warehouse compatible

Never use unrestricted SQL generation.

---

# MCP Philosophy

MCP is the execution layer.

It executes validated business operations.

It does not perform semantic reasoning.

It does not perform prompt engineering.

It should remain deterministic.

---

# Backend Philosophy

The backend orchestrates.

It does not contain warehouse knowledge.

It does not contain SQL.

It coordinates repositories.

---

# Builder Philosophy

Builder creates intelligence.

It does not answer questions.

Its responsibility ends after warehouse understanding is completed.

---

# Future Vision

The platform should eventually support any enterprise warehouse without requiring code changes.

Customer onboarding should consist of:

Connect Warehouse

↓

Scan Metadata

↓

Build Semantic Model

↓

Create Vector Knowledge

↓

Validate

↓

Ready for Business Intelligence

---

# Engineering Workflow

Every repository must follow this process.

Architecture

↓

Folder Structure

↓

Implementation

↓

Unit Tests

↓

Documentation

↓

Review

↓

GitHub

↓

Render (if applicable)

No coding begins before architecture approval.

---

# Codex Instructions

You are the Engineering Lead for DDIP.

You will generate repositories one by one.

Do not generate future repositories before instructed.

Do not change the responsibilities of existing repositories.

Do not introduce unnecessary technologies.

Preserve architecture consistency across all repositories.

Always prioritize maintainability, extensibility, and enterprise quality.

This document is the permanent engineering contract for DDIP.
