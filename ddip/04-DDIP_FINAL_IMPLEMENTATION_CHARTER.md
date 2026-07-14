# DDIP Final Implementation Charter
## DeTLeng Data Intelligence Platform
## Permanent Engineering Contract

Status: Final architecture blueprint for implementation  
Purpose: Single source of truth for DDIP platform engineering  
Scope: Architecture, repository boundaries, dependency rules, lifecycle, governance, testing, deployment, and enterprise readiness  
Code generation: Not included  

---

# 1. Executive Mandate

DDIP, the DeTLeng Data Intelligence Platform, is a universal enterprise data intelligence platform that transforms customer warehouses into governed AI-powered business intelligence systems.

DDIP is not a chatbot.

DDIP is not a generic SQL generator.

DDIP is not a dataset-specific dashboard backend.

DDIP is a metadata-driven, semantic, governed intelligence platform that allows business users to ask natural language questions and receive trusted answers from enterprise data warehouses.

The platform must support the current working architecture while evolving toward universal warehouse intelligence.

The current DeTLeng case-study implementation remains the reference implementation, but it must not become the architectural limit.

---

# 2. Platform Vision

The long-term DDIP vision is:

Any warehouse.  
Any schema.  
Any naming convention.  
Any business domain.  
Trusted business answers.  
No hardcoded dataset logic.

DDIP must allow an enterprise customer to connect a warehouse, scan metadata, build a governed semantic model, validate business concepts, and expose safe AI-powered analytics through MCP.

Future DDIP should support:

- Google BigQuery
- Snowflake
- Databricks
- PostgreSQL
- SQL Server
- Amazon Redshift
- Additional SQL warehouses through connector plugins

The platform must not require manual rewriting of business tools when customer schemas change.

The business intent must remain stable while physical warehouse implementation changes.

Example:

Business concept: Revenue

Customer A mapping: sales fact amount  
Customer B mapping: invoice line value  
Customer C mapping: order total  

The user still asks: "What is total revenue?"

DDIP resolves the meaning through semantic metadata, not hardcoded SQL.

---

# 3. Architectural North Star

All future DDIP engineering must follow this flow:

Business Question

↓

Intent Understanding

↓

Semantic Concept Resolution

↓

Customer-Specific Metadata Mapping

↓

Logical Query Plan

↓

Warehouse-Specific SQL Generation

↓

Validation and Governance

↓

MCP Execution

↓

Warehouse Result

↓

AI Explanation

↓

Business Answer

SQL must never be generated directly from a raw user prompt.

MCP tools must never own warehouse-specific table names, column names, joins, or SQL logic in the universal architecture.

---

# 4. Current Architecture Assessment

The current implementation has strong foundations:

- FastAPI backend
- OpenAI integration
- Custom BigQuery MCP server
- Deterministic routing
- 100+ business intelligence tools
- BigQuery analytics dataset
- Knowledge layer
- Enterprise documentation

This architecture should not be discarded.

The current system correctly separates:

- user request handling
- deterministic routing
- MCP execution
- BigQuery access
- OpenAI explanation

The major limitation is that business tools are still coupled to one dataset and one schema.

Therefore the platform must evolve by adding intelligent layers, not by replacing the working system.

---

# 5. Core Engineering Principles

Every repository and module must follow these principles:

1. Metadata before semantics.
2. Semantics before SQL.
3. SQL before execution.
4. Validation before execution.
5. MCP executes only trusted operations.
6. Backend orchestrates only.
7. OpenAI explains and assists, but never becomes the source of truth.
8. Business concepts must be independent from warehouse schemas.
9. Warehouse connectors must be replaceable.
10. Repository boundaries must be explicit and enforceable.
11. No circular dependencies.
12. No hidden business logic duplication.
13. No direct user SQL execution.
14. No customer-specific logic inside platform core.
15. Every major artifact must be versioned.
16. Every production path must be observable.
17. Every generated query must be explainable.
18. Every enterprise metric must be certifiable.

---

# 6. Future Platform Architecture

DDIP consists of the following platform layers:

Presentation Layer

↓

Gateway and Backend Layer

↓

Intent and Orchestration Layer

↓

Universal Tool Layer

↓

Semantic Intelligence Layer

↓

Metadata Intelligence Layer

↓

Vector Intelligence Layer

↓

Logical Query Planning Layer

↓

SQL Generation Layer

↓

Validation and Governance Layer

↓

MCP Execution Layer

↓

Warehouse Connector Layer

↓

Enterprise Warehouse

The original charter was correct to define layers, but it missed one critical layer: Logical Query Planning.

Logical Query Planning must exist between semantic resolution and SQL generation. Without this layer, SQL generation becomes too coupled to semantic interpretation.

---

# 7. Layer Responsibilities

## 7.1 Presentation Layer

Responsible for:

- User interface
- Chat experience
- User context submission
- Displaying answers
- Displaying citations, metadata, and result provenance where available

Must never:

- Generate SQL
- Select warehouse tables
- Interpret semantic models
- Execute MCP tools directly

## 7.2 Backend Layer

Responsible for:

- API endpoints
- Request validation
- Authentication enforcement
- Tenant context resolution
- Orchestration
- Calling downstream engines
- Response formatting

Must never:

- Store warehouse-specific logic
- Store SQL
- Store semantic mappings
- Perform metadata extraction
- Perform SQL generation

## 7.3 Intent Layer

Responsible for:

- Classifying request type
- Extracting business intent
- Detecting KPI requests
- Detecting tool discovery requests
- Detecting metadata/documentation requests
- Detecting ambiguous questions

Must never:

- Generate SQL
- Execute warehouse queries
- Override certified semantic definitions

## 7.4 Semantic Intelligence Layer

Responsible for:

- Business concepts
- Measures
- Dimensions
- KPIs
- Metrics
- Entities
- Hierarchies
- Grain
- Business glossary
- Ontology
- Semantic graph
- Concept-to-metadata mapping

Must never:

- Execute SQL
- Store raw warehouse credentials
- Depend on backend implementation

## 7.5 Metadata Layer

Responsible for:

- Warehouse metadata extraction
- Metadata storage
- Metadata versioning
- Schema evolution tracking
- Data profiling metadata
- Relationship discovery
- Constraint discovery

Must never:

- Interpret user questions
- Explain answers to end users
- Execute business KPI requests directly

## 7.6 Vector Intelligence Layer

Responsible for:

- Retrieval over documentation
- Retrieval over glossary terms
- Retrieval over semantic definitions
- Retrieval over table and column documentation
- Retrieval over approved sample queries
- Retrieval over generated documentation

Must never:

- Store raw customer data by default
- Store secrets
- Store unapproved personal data
- Act as conversation memory
- Become the source of certified metric truth

## 7.7 Logical Query Planning Layer

Responsible for:

- Converting semantic intent into a warehouse-neutral logical plan
- Selecting measures
- Selecting dimensions
- Selecting filters
- Selecting time grains
- Selecting aggregation strategy
- Selecting join paths from semantic graph

Must never:

- Emit executable SQL directly as its primary contract
- Use physical table names unless explicitly part of a resolved mapping
- Skip validation

## 7.8 SQL Generation Layer

Responsible for:

- Converting logical query plans into dialect-specific SQL
- Supporting warehouse dialects
- Producing explainable SQL
- Producing SQL lineage metadata

Must never:

- Accept raw user prompts as direct SQL instructions
- Invent tables
- Invent columns
- Invent joins
- Execute SQL

## 7.9 Validation and Governance Layer

Responsible for:

- SQL validation
- Semantic validation
- Join validation
- Grain validation
- Policy enforcement
- Cost checks
- Read-only enforcement
- Warehouse dry runs

Must never:

- Allow unsafe SQL through by default
- Treat warnings as approvals for certified metrics

## 7.10 MCP Execution Layer

Responsible for:

- Exposing deterministic tools
- Executing validated operations
- Enforcing tool contracts
- Returning structured results

Must never:

- Perform prompt engineering
- Infer business meaning independently from the semantic layer
- Generate SQL from user text

## 7.11 Warehouse Connector Layer

Responsible for:

- Warehouse-specific connections
- Credential usage
- Query execution
- Query cancellation
- Dialect capability reporting
- Warehouse-specific dry-run or explain-plan support

Must never:

- Store business semantics
- Rewrite business definitions

---

# 8. Repository Strategy

The initial repository list is directionally correct but requires refinement.

The platform must avoid excessive fragmentation too early. Some components should begin as libraries and become services only when operational scale requires it.

## 8.1 Recommended Repository Portfolio

### 1. `ddip-core`

Purpose:

Shared contracts, domain models, configuration primitives, errors, event schemas, tenant context, and platform-wide interfaces.

Must contain:

- Shared data contracts
- Domain enums
- Error models
- Tenant context model
- Version contracts
- Interface definitions

Must not contain:

- Business logic
- SQL generation
- OpenAI calls
- FastAPI endpoints
- MCP server implementation
- Warehouse-specific code

Recommendation: Keep.

### 2. `ddip-metadata-engine`

Purpose:

Warehouse metadata extraction, profiling, metadata storage adapters, schema versioning, relationship discovery.

Original charter did not list this as a standalone repository. This repository must be added.

Recommendation: Add.

### 3. `ddip-semantic-engine`

Purpose:

Semantic catalog, metric registry, business glossary, ontology, concept mapping, semantic graph, semantic planning.

Recommendation: Keep and strengthen.

### 4. `ddip-query-planner`

Purpose:

Warehouse-neutral logical query planning.

This is missing from the original charter and must be added to prevent tight coupling between semantic resolution and SQL generation.

Recommendation: Add.

### 5. `ddip-sql-engine`

Purpose:

Dialect-specific SQL generation from logical plans.

Recommendation: Keep, but rename internally as SQL generation engine if needed.

### 6. `ddip-validation-engine`

Purpose:

SQL validation, semantic validation, policy checks, cost checks, dry-run integration.

Recommendation: Keep.

### 7. `ddip-vector-engine`

Purpose:

Embedding, retrieval, vector collection management, semantic/documentation retrieval.

Recommendation: Keep.

### 8. `ddip-builder`

Purpose:

Onboarding-time orchestration that scans a warehouse, generates metadata, proposes semantic mappings, creates documentation, generates embeddings, and prepares the platform for runtime.

Recommendation: Keep, but define as builder/orchestrator, not runtime execution engine.

### 9. `ddip-mcp`

Purpose:

Universal MCP server exposing deterministic tools backed by semantic and validation engines.

Recommendation: Keep.

### 10. `ddip-backend`

Purpose:

FastAPI orchestration service for frontend/API clients.

Recommendation: Keep.

### 11. `ddip-connectors`

Purpose:

Warehouse connector plugins for BigQuery, Snowflake, Databricks, SQL Server, PostgreSQL, and Redshift.

This should be added to prevent warehouse-specific logic from leaking into core engines.

Recommendation: Add.

### 12. `ddip-docs-engine`

Purpose:

Enterprise documentation generation from metadata and semantic definitions.

This may begin inside Builder, but should become separate when documentation workflows mature.

Recommendation: Add later, not first.

### 13. `ddip-observability`

Purpose:

Shared logging, tracing, metrics, audit event schemas, health reporting.

This may begin inside Core as contracts and later split.

Recommendation: Add later if needed.

## 8.2 Repository Decision Summary

Keep:

- `ddip-core`
- `ddip-builder`
- `ddip-semantic-engine`
- `ddip-sql-engine`
- `ddip-validation-engine`
- `ddip-vector-engine`
- `ddip-mcp`
- `ddip-backend`

Add:

- `ddip-metadata-engine`
- `ddip-query-planner`
- `ddip-connectors`

Add later:

- `ddip-docs-engine`
- `ddip-observability`

Do not create yet:

- UI repository unless product frontend work begins
- Admin console repository unless semantic approval workflows are implemented

---

# 9. Dependency Architecture

Dependencies must flow inward and downward toward stable contracts.

Allowed dependency direction:

Backend

↓

MCP Client / Core Contracts

↓

Core

MCP

↓

Semantic Engine

↓

Query Planner

↓

SQL Engine

↓

Validation Engine

↓

Connectors

↓

Warehouse

Builder

↓

Metadata Engine

↓

Semantic Engine

↓

Vector Engine

↓

Documentation outputs

Core may be imported by every repository.

Core may import no DDIP repository.

Forbidden dependencies:

- Core importing any platform service
- Backend importing SQL Engine directly
- Backend importing warehouse connectors directly
- MCP importing Backend
- Semantic Engine importing Backend
- Vector Engine importing Backend
- SQL Engine importing Backend
- Connectors importing Semantic Engine
- Validation Engine importing Backend
- Any circular dependency

Boundary rule:

If a repository needs a concept from another repository, the concept must be represented as a contract in `ddip-core` or passed through a stable interface.

---

# 10. Builder Architecture

The Builder concept is valid, but it must be tightly constrained.

Builder is an onboarding-time intelligence orchestrator.

Builder should initially be a service, not only a library, because warehouse onboarding is a long-running, stateful workflow requiring progress tracking, retries, review gates, and audit logs.

Builder responsibilities:

- Start onboarding workflow
- Coordinate metadata extraction
- Coordinate profiling
- Coordinate relationship discovery
- Coordinate glossary generation
- Coordinate semantic model proposal
- Coordinate vector indexing
- Coordinate documentation generation
- Track onboarding status
- Produce onboarding reports
- Require human approval for certified semantic assets

Builder must never:

- Answer business user questions at runtime
- Execute end-user KPI requests
- Bypass validation
- Store warehouse credentials directly
- Become a runtime query engine
- Own semantic truth after publishing

Builder lifecycle:

1. Connect warehouse.
2. Extract metadata.
3. Profile safely.
4. Discover relationships.
5. Generate draft semantic model.
6. Generate glossary.
7. Generate documentation.
8. Build vector indexes.
9. Run validation suite.
10. Submit for human approval.
11. Publish semantic model version.

Runtime engines consume Builder outputs. They do not depend on Builder execution.

---

# 11. Metadata Architecture

Metadata is the foundation of DDIP.

No semantic reasoning may occur before metadata exists.

No SQL generation may occur before semantic mappings exist.

## 11.1 Metadata Collection

Metadata must be collected from:

- Warehouse information schema
- Warehouse catalogs
- Table metadata
- Column metadata
- Constraints
- Primary keys where available
- Foreign keys where available
- Partitioning
- Clustering
- Row counts
- Storage size
- Last modified timestamps
- Query history where available
- Existing documentation
- dbt artifacts where available
- BI dashboard metadata where available
- Data catalog metadata where available

## 11.2 Metadata Storage

Metadata must be stored in a durable operational metadata store.

Recommended default:

- PostgreSQL for operational metadata and semantic catalog
- BigQuery for large historical profiling snapshots if needed

Metadata must be queryable by:

- tenant
- warehouse
- project
- dataset
- schema
- table
- column
- version
- scan timestamp

## 11.3 Metadata Versioning

Every metadata scan must produce a versioned snapshot.

The platform must detect:

- added tables
- removed tables
- renamed tables where inferable
- added columns
- removed columns
- changed data types
- changed descriptions
- changed partitioning
- changed relationships
- changed row counts
- changed freshness

## 11.4 Schema Evolution

Schema evolution must trigger impact analysis.

If a certified metric depends on changed metadata, DDIP must:

- mark the metric as impacted
- preserve the last valid semantic model
- prevent silent incorrect answers
- notify owners
- require revalidation if necessary

Runtime must use the latest approved semantic version, not the latest raw metadata scan automatically.

---

# 12. Semantic Intelligence Architecture

The Semantic Intelligence Layer must contain these components:

## 12.1 Business Glossary

Defines business terms, synonyms, descriptions, examples, owners, and certification status.

## 12.2 Metric Registry

Defines certified and draft measures and KPIs.

Each metric must include:

- name
- business definition
- aggregation rule
- semantic expression
- allowed dimensions
- allowed filters
- grain
- owner
- certification status
- version

## 12.3 Dimension Registry

Defines business dimensions and hierarchies.

Examples:

- customer
- product
- seller
- geography
- time
- payment method

## 12.4 Ontology

Defines universal business entities and relationships across domains.

Examples:

- Customer places Order
- Order contains Product
- Seller fulfills Order
- Payment pays Order
- Review evaluates Order

## 12.5 Semantic Catalog

Stores all available semantic assets for a tenant:

- concepts
- metrics
- dimensions
- hierarchies
- relationships
- glossary terms
- mappings
- validation status

## 12.6 Concept Mapping

Maps universal concepts to customer-specific warehouse objects.

## 12.7 Semantic Graph

Represents entities, measures, dimensions, join paths, and grain relationships as a graph.

This graph is required for safe query planning.

## 12.8 Certification Workflow

Semantic assets must support states:

- discovered
- inferred
- draft
- reviewed
- certified
- deprecated
- blocked

Only certified or explicitly allowed draft assets may be used for production KPI answers.

---

# 13. SQL and Query Planning Architecture

SQL generation must not be the first step.

The correct architecture is:

Intent

↓

Semantic Resolution

↓

Logical Query Plan

↓

Physical SQL Plan

↓

Warehouse SQL

↓

Validation

↓

Execution

## 13.1 Logical Query Plan

The logical plan must describe:

- selected metric
- selected dimensions
- filters
- time range
- time grain
- aggregation
- sort
- limit
- relationship path
- expected result shape

It must not be warehouse-specific.

## 13.2 Physical SQL Plan

The physical plan resolves:

- warehouse dialect
- table names
- column names
- join paths
- grouping columns
- filter expressions
- partition filters

## 13.3 SQL Validation

Validation must include:

- read-only enforcement
- table authorization
- column authorization
- dataset scope
- unknown table rejection
- unknown column rejection
- join validation
- grain validation
- aggregate validation
- cost estimation
- warehouse dry run
- forbidden keyword rejection
- maximum bytes billed policy

## 13.4 SQL Optimization

SQL generation should prefer:

- required columns only
- partition filters
- clustered columns where useful
- pre-aggregated semantic tables where available
- safe limits for previews
- deterministic aggregation
- explicit joins

## 13.5 Warehouse Compatibility

The SQL Engine must support dialect adapters.

No semantic logic may be embedded inside warehouse adapters.

Warehouse adapters only translate approved physical plans into dialect-specific SQL.

---

# 14. Vector Intelligence Architecture

Vector Intelligence is retrieval infrastructure.

It is not memory.

It is not the source of certified truth.

It is not a substitute for metadata or semantic models.

## 14.1 Store in Vector Collections

Allowed:

- business glossary entries
- table documentation
- column documentation
- relationship documentation
- KPI definitions
- semantic definitions
- approved sample queries
- architecture documentation
- onboarding reports
- generated data dictionaries
- generated business dictionaries

## 14.2 Never Store by Default

Not allowed by default:

- raw customer data
- secrets
- credentials
- API keys
- personal data samples
- full query result sets
- unapproved sensitive values

## 14.3 Multiple Collections

Use multiple collections or namespaces:

- glossary collection
- metadata documentation collection
- semantic definitions collection
- sample query collection
- enterprise documentation collection
- operational runbook collection

Each vector record must include metadata:

- tenant ID
- warehouse ID
- semantic version
- source type
- certification status
- last updated
- access policy

## 14.4 Retrieval Strategy

Use hybrid retrieval:

- keyword search
- vector search
- metadata filters
- semantic graph expansion

Certified content must outrank inferred content.

Tenant isolation must be enforced at retrieval time.

---

# 15. MCP Architecture

MCP must remain deterministic.

MCP is the trusted execution layer.

Future MCP must expose universal tools rather than dataset-specific SQL tools.

Current tool:

- `get_total_revenue`
- contains dataset-specific SQL

Future tool:

- `get_metric`
- receives business intent or semantic metric identifier
- calls Semantic Engine
- receives validated query plan
- executes through Validation and Connector layers

MCP responsibilities:

- expose universal tools
- validate tool input contracts
- call semantic/query/validation engines
- execute only approved operations
- return structured results
- return provenance metadata

MCP must never:

- decide business definitions alone
- generate raw SQL from user prompts
- bypass semantic certification
- bypass validation
- perform prompt engineering

Repository boundary:

`ddip-mcp` may depend on:

- `ddip-core`
- `ddip-semantic-engine`
- `ddip-query-planner`
- `ddip-sql-engine`
- `ddip-validation-engine`
- `ddip-connectors`

`ddip-mcp` must not depend on:

- `ddip-backend`
- frontend code

---

# 16. Backend Architecture

The backend must remain lightweight.

Backend responsibilities:

- authentication
- tenant resolution
- request validation
- orchestration
- calling MCP or platform services
- response formatting
- error normalization

Backend must never contain:

- SQL
- warehouse-specific table names
- semantic mappings
- metric formulas
- relationship logic
- metadata extraction logic

Backend may call:

- MCP
- core contracts
- authentication provider
- knowledge services
- observability services

Backend should not directly call:

- SQL Engine
- warehouse connectors
- metadata extraction internals

The backend is an orchestrator, not an intelligence engine.

---

# 17. Warehouse Strategy

DDIP must support multiple warehouse vendors through connector abstraction.

## 17.1 Warehouse Connector Contract

Every connector must provide:

- connect
- test connection
- list schemas
- list tables
- list columns
- read metadata
- read constraints
- read table statistics
- execute read-only query
- dry-run or explain plan if supported
- cancel query
- report dialect capabilities

## 17.2 Initial Warehouse Priority

Phase order:

1. BigQuery
2. PostgreSQL
3. Snowflake
4. Databricks
5. SQL Server
6. Redshift

BigQuery remains the primary implementation target, but no core design may assume BigQuery-only behavior.

## 17.3 Warehouse-Specific Logic

Warehouse-specific behavior must live only in connector and dialect adapter modules.

No warehouse-specific syntax may leak into:

- backend
- semantic engine
- vector engine
- core
- builder workflow definitions

---

# 18. Extensibility Rules

New warehouses must be added by creating a connector and dialect adapter, not by modifying existing engines.

New semantic concepts must be added through the semantic catalog, not by changing backend routing.

New execution engines must implement stable contracts from `ddip-core`.

New vector providers must implement the vector store interface.

New metadata sources must plug into Metadata Engine ingestion.

New MCP tools must be universal unless explicitly approved as customer-specific extensions.

---

# 19. Security Architecture

Security is not optional or later decoration.

DDIP must be designed for enterprise tenant isolation from the beginning.

## 19.1 Authentication

The backend must enforce authentication for protected routes.

Supported future options:

- OAuth2/OIDC
- enterprise SSO
- API keys for service accounts

## 19.2 Authorization

Authorization must support:

- tenant roles
- workspace roles
- dataset roles
- semantic model roles
- tool permissions
- metric access permissions

## 19.3 Tenant Isolation

Every request must carry tenant context.

Every metadata lookup, vector retrieval, semantic lookup, and query execution must enforce tenant scope.

## 19.4 Secrets Management

Warehouse credentials must be stored in a managed secret system.

Credentials must never be stored in vector databases, logs, prompts, or generated documentation.

## 19.5 SQL Safety

All SQL must be:

- generated from approved plans
- validated
- read-only
- scoped to authorized warehouse objects
- cost-aware
- auditable

## 19.6 Audit Logging

Audit logs must record:

- user
- tenant
- request
- intent
- semantic metric
- generated query ID
- validation result
- warehouse execution metadata
- result status

---

# 20. Observability Architecture

Every production path must be observable.

Required observability:

- structured logs
- request IDs
- trace IDs
- tenant IDs
- latency metrics
- tool execution metrics
- warehouse query metrics
- OpenAI usage metrics
- token usage metrics
- validation failure metrics
- SQL generation failure metrics
- onboarding workflow metrics
- health checks
- readiness checks
- dependency checks

Recovery strategy:

- retries for transient warehouse errors
- circuit breaker for failing dependencies
- clear user-facing error responses
- internal error details in logs only
- failed onboarding workflow resume
- failed metadata scan retry

---

# 21. Testing Strategy

Every repository must contain tests appropriate to its responsibility.

## 21.1 Unit Tests

Required for:

- core contracts
- semantic resolution
- mapping logic
- SQL generation
- validation logic
- connector behavior
- vector retrieval filtering
- backend routing

## 21.2 Contract Tests

Required between:

- backend and MCP
- MCP and semantic engine
- semantic engine and query planner
- query planner and SQL engine
- SQL engine and validation engine
- validation engine and connector

## 21.3 Integration Tests

Required for:

- BigQuery metadata extraction
- BigQuery dry-run validation
- MCP end-to-end execution
- onboarding workflow
- vector retrieval

## 21.4 Semantic Tests

Required for:

- metric definitions
- allowed dimensions
- grain correctness
- relationship correctness
- concept mapping correctness
- certified KPI regression

## 21.5 SQL Validation Tests

Required for:

- rejected unsafe SQL
- rejected unknown tables
- rejected unknown columns
- rejected invalid joins
- rejected write operations
- cost policy enforcement

No repository is production-ready without automated tests.

---

# 22. Documentation Strategy

Every repository must include:

- README
- architecture document
- contracts document
- setup guide
- testing guide
- CHANGELOG
- operational notes where applicable

Platform-level documentation must include:

- system architecture
- repository map
- dependency rules
- onboarding workflow
- security model
- semantic model lifecycle
- metadata lifecycle
- deployment guide
- troubleshooting guide
- contribution guide

Generated documentation must include:

- data dictionary
- business glossary
- semantic catalog
- KPI documentation
- relationship documentation
- query validation documentation

Documentation must be versioned with releases.

---

# 23. Versioning Strategy

Versioned artifacts:

- repositories
- Python packages
- API contracts
- MCP tool contracts
- semantic model versions
- metadata snapshots
- vector index versions
- prompt templates
- SQL dialect adapters
- connector versions

Backward compatibility:

- Public contracts must remain backward compatible within a major version.
- Breaking changes require major version increments.
- Semantic model changes require impact analysis.
- Certified metric changes require approval and changelog entries.

Release strategy:

- Development release
- Staging release
- Production release

Every release must include:

- tests passed
- contract compatibility checked
- migration notes
- rollback notes

---

# 24. Deployment Strategy

Render may be used for initial deployment.

Render strategy:

- host FastAPI backend
- host MCP service
- host Builder service if implemented as API/worker
- use environment-specific services

Environment separation:

- local
- development
- staging
- production

Production readiness requires:

- health checks
- readiness checks
- environment variable validation
- secret management
- structured logging
- dependency monitoring
- rollback procedure
- deployment checklist

Scaling strategy:

- stateless backend services
- stateless MCP runtime where possible
- external metadata store
- external vector store
- external cache
- workers for onboarding and metadata scans

Render is acceptable early. Enterprise deployments may later require Google Cloud Run, GKE, or customer-managed infrastructure.

---

# 25. Engineering Workflow

The original workflow is correct but incomplete.

Final workflow:

1. Architecture approval
2. Contract design
3. Threat model
4. Data model design
5. Interface design
6. Implementation
7. Unit tests
8. Contract tests
9. Integration tests
10. Documentation
11. Architecture review
12. Security review
13. Release notes
14. Staging deployment
15. Production deployment
16. Post-deployment validation

No implementation begins without approved architecture and contracts.

No production release occurs without tests, documentation, and rollback notes.

---

# 26. Permanent Non-Negotiable Rules

1. DDIP must never be hardcoded to one dataset.
2. SQL must never be generated directly from raw user prompts.
3. Business metrics must come from semantic definitions.
4. Certified metrics must be versioned.
5. Warehouse-specific logic must stay inside connectors and dialect adapters.
6. Backend must remain lightweight.
7. MCP must remain deterministic.
8. Builder must not answer runtime business questions.
9. Vector search must not become the source of truth.
10. Every query must be validated before execution.
11. Tenant isolation must be enforced in every layer.
12. Repository boundaries must not be violated.
13. No circular dependencies are allowed.
14. Documentation must evolve with implementation.
15. Tests are required for production readiness.

---

# 27. Final Architecture Decision

The initial charter is directionally strong, but it under-specifies several critical enterprise concerns:

- Metadata Engine should be its own architectural component.
- Logical Query Planner is required.
- Connectors should be separated from SQL generation.
- Builder should be an onboarding service, not a runtime engine.
- Vector Intelligence must be retrieval infrastructure, not memory or truth.
- Semantic Intelligence must include glossary, ontology, metric registry, semantic catalog, concept mapping, and semantic graph.
- Security, observability, testing, and versioning must be first-class architecture concerns.

This final charter is the governing implementation blueprint for DDIP.

All future repositories must conform to this document unless the architecture is formally revised and approved.

