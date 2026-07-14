You are now entering the implementation phase of DDIP (DeTLeng Data Intelligence Platform).

The attached document `DDIP_FINAL_IMPLEMENTATION_CHARTER.md` is the permanent engineering contract for the platform.

You must treat it as the single source of truth.

No architectural decision may violate this charter.

We will now build the platform repository by repository.

Only one repository will be developed at a time.

Do not generate future repositories.

Do not create placeholder code for future components.

Focus only on the current repository.

---

# Current Repository

ddip-core

This repository becomes the foundation of the entire DDIP platform.

Every future repository will depend on this repository.

Therefore, design it carefully.

---

# Objective

Produce a complete production-ready version of `ddip-core`.

This is not a prototype.

This is the permanent foundation of DDIP.

---

# Responsibilities

Implement only what belongs inside ddip-core according to the approved DDIP Final Implementation Charter.

Do not move business logic into Core.

Core must contain only shared platform contracts and reusable components.

---

# Expected Deliverables

Produce everything required for a production-quality repository, including:

- Complete repository architecture
- Folder structure
- Python package structure
- Domain models
- Shared contracts
- Platform interfaces
- Configuration system
- Error models
- Common enums
- Constants
- Shared utilities
- Versioning strategy
- Dependency policy
- Repository standards
- Testing strategy
- Documentation structure
- README
- CHANGELOG
- LICENSE recommendation
- .gitignore
- pyproject.toml
- requirements (if needed)
- Developer guidelines
- Coding standards
- Naming conventions
- Import conventions

Everything that belongs inside ddip-core should be created.

Nothing outside its responsibility should be included.

---

# Repository Rules

The repository must:

- be independently testable
- be production ready
- have enterprise documentation
- have clean architecture
- have zero circular dependencies
- expose stable contracts for future repositories

---

# Important Constraints

Do NOT implement:

- FastAPI
- OpenAI
- SQL generation
- MCP
- Metadata extraction
- Semantic Engine
- Builder
- Query Planner
- Warehouse connectors

Those belong to future repositories.

---

# Output

Generate the complete repository.

Include all files.

Include complete folder hierarchy.

Generate complete code where appropriate.

Generate documentation.

Generate tests.

Do not leave TODO placeholders unless absolutely necessary.

Build ddip-core as if every future DDIP repository will depend on it.

When this repository is complete, stop.

Do not continue to Repository 2.
