// blogData.js
// Data object keyed by blog title; values are the blog properties.
// Used by relatedBlogs.js to find and display related blog posts.

const blogData = {
    "Your First RAG in Flowise (No-Code)":{
      "title": "Your First RAG in Flowise (No-Code)",
      "type": "blog",
      "subTitle": "Flowise, No-Code RAG, Embeddings & Vector DBs",
      "keywords": "Flowise no-code drag-and-drop RAG retrieval-augmented generation knowledge retrieval document ingestion document loaders data connectors PDFs URLs Notion Google Drive CSV web pages text files chunking text splitter chunk overlap embeddings embedding models OpenAI embeddings Cohere embeddings Instructor embeddings sentence-transformers vector database vector store FAISS Chroma Pinecone Qdrant Weaviate Milvus hybrid search semantic search keyword search BM25 dense retrieval sparse retrieval retriever LLM OpenAI Anthropic Azure OpenAI orchestration",
      "description": "Build your first RAG pipeline in Flowise—ingest docs, chunk and embed them into a vector database, connect a retriever (with optional re-ranking) to an LLM via prompt templates, and chat with grounded answers and citations—no code required.",
      "image": "https://cdn-images-1.medium.com/max/2560/1*Ot4SmbXKQjNXKcxOoBrz6A.png",
      "url": "https://medium.com/@ShawnBasquiat/your-first-rag-in-flowise-no-code-0d246bf2a060",
      "button": {
        "Read": "https://medium.com/@ShawnBasquiat/your-first-rag-in-flowise-no-code-0d246bf2a060"
      }
    },

  
    "Drag. Drop. Deploy: Build an AI Assistant with Flowise":{
      "title": "Drag. Drop. Deploy: Build an AI Assistant with Flowise",
      "type": "blog",
      "subTitle": "Flowise, LangChain.js, Node.js/TypeScript, Docker, Pinecone/Chroma, OpenAI/Anthropic/Gemini",
      "keywords": "Flowise no-code drag-and-drop visual-builder AI agents chatbot assistants agentic-workflows chatflows agentflows LangChain.js LLM orchestration pipelines nodes canvas prompt-chaining tool-calling function-calling web-search API-calls REST webhooks data-connectors loaders RAG retrieval-augmented-generation embeddings vector-database Pinecone Chroma Weaviate FAISS Milvus Supabase Postgres knowledge-base document-ingestion PDFs CSVs websites sitemaps scraping memory conversation-memory short-term-memory long-term-memory context window summarization grounding fallback-handlers evaluation monitoring logging analytics rate-limiting auth authentication JWT RBAC multi-tenant environment-variables secrets management versioning export import JSON schema OpenAPI swagger chat-widget embed iframe branding theming UI components self-hosted open-source Docker Docker-Compose Kubernetes Helm Vercel Render Railway Fly.io AWS GCP Azure serverless Node.js TypeScript JavaScript npm pnpm yarn OpenAI GPT-4o GPT-4.1 function-calling Anthropic Claude 3.5 Sonnet Google Gemini 1.5 Pro Ollama local-models Hugging Face Transformers llama.cpp text-generation image-generation speech-to-text text-to-speech retrieval tools connectors vector-store caching batching streaming SSE token-usage cost-controls observability testing fixtures CI/CD",
      "description": "An AI assistant using Flowise’s open-source, no-code canvas. Visually compose an agent by snapping together LLMs, memory modules, tool nodes (web search, custom API calls, function tools), and data connectors for RAG over docs.",
      "image": "https://cdn-images-1.medium.com/max/2560/1*jDFWC5DdMExS0knG7zatjg.png",
      "url": "https://medium.com/@ShawnBasquiat/drag-drop-deploy-build-an-ai-assistant-with-flowise-a5f71e19531b",
      "button": {
        "Read": "https://medium.com/@ShawnBasquiat/drag-drop-deploy-build-an-ai-assistant-with-flowise-a5f71e19531b"
      }
    },

  
    "Observability in Flowise: Traces You Can Trust":{
      "title": "Observability in Flowise: Traces You Can Trust",
      "type": "blog",
      "subTitle": "Flowise, OpenTelemetry, Jaeger, Grafana, Datadog, LangChain",
      "keywords": "Flowise Observability Tracing Telemetry OpenTelemetry OTel Traces Spans Metrics Logs Distributed Tracing Jaeger Grafana Tempo Loki Prometheus Datadog New Relic Honeycomb Elastic APM Sentry Dashboards Alerting SLI SLO Error Budgets Latency p50 p95 p99 Throughput Cost Monitoring Token Usage Token Spend Prompt Tokens Completion Tokens Rate Limits Retries Exponential Backoff Circuit Breaker Concurrency Queues DLQ Webhooks Audit Logging PII Redaction Secrets Management Environment Variables Config Runtime Agents Agentic Workflows Tools Tool Calls Function Calling LLMOps RAG Vector Store Pinecone Weaviate Chroma Milvus FAISS Embeddings Chunking Retriever Evaluator Evals Regression Tests Unit Tests Smoke Tests Load Testing Soak Testing Tracing Context Trace ID Span ID Correlation ID Request ID Sampling Head Based Sampling Tail Based Sampling Batching Exporters OTLP gRPC HTTP JSON Logging Structured Logging Kibana Kubernetes K8s Helm Docker Node.js TypeScript LangChain LlamaIndex Vercel Cloud Serverless Edge Compliance SOC2 HIPAA GDPR Access Controls RBAC Policies Content Safety Moderation Guardrails Prompt Templates Observability Pipeline Debugging Root Cause Analysis Incident Response On Call Runbooks Cost Anomalies Drift Detection Token Budgets",
      "description": "End-to-end observability for Flowise agents: capture trustworthy traces for every node and tool call, export OTel data to Jaeger/Grafana/Datadog, correlate logs and metrics, track latency and token cost, build dashboards and alerts, and add safe redaction for sensitive inputs/outputs.",
      "image": "https://cdn-images-1.medium.com/max/2560/1*ywyxodWqqEFBlzD9QDbH3w.png",
      "url": "https://medium.com/@ShawnBasquiat/observability-in-flowise-traces-you-can-trust-b5d5997e6026",
      "button": {
        "Read": "https://medium.com/@ShawnBasquiat/observability-in-flowise-traces-you-can-trust-b5d5997e6026"
      }
    },

  
    "Agentflow V2 Deep Dive: State, Tools, and Orchestration":{
      "title": "Agentflow V2 Deep Dive: State, Tools, and Orchestration",
      "type": "blog",
      "subTitle": "TypeScript, Node.js, State-Machine Orchestration",
      "keywords": "Flowise Agentflow Agentflow-V2 state-machine deterministic-execution directed-graph DAG nodes edges transitions orchestration tool-orchestration tool-calling function-calling JSON-Schema OpenAPI tool-registry capability-routing planner executor controller runner workflow-engine branching merging join-gateways parallel-execution concurrency stepwise-execution retries backoff circuit-breaker timeout budget-aware cost-tracking idempotency compensation saga-pattern rollback checkpointing persistence durable-state resumability replay auditability reproducibility run-traces observability logging metrics tracing OpenTelemetry span-events correlation-ids event-driven message-bus task-queue worker-pool scheduling rate-limiting throttling caching memoization input-validation output-validation schema-enforcement guardrails safety-policies RBAC secrets-management sandboxed-tools isolation security policy-engine versioning graph-versioning canary-rollout A/B-testing dry-run simulation debugging introspection visualization graph-editor lineage dataflow context-propagation memory-state global-state per-node-state error-handling failure-modes fallback escalation alerts notifications SLAs performance profiling autoscaling horizontal-scaling Kubernetes Docker containers serverless cloud-native REST gRPC webhooks CLI SDK TypeScript Node.js Python interoperability LangGraph LangChain agent-runtime multi-agent coordinator evaluator test-harness unit-tests integration-tests",
      "description": "Deep dive into Agentflow V2: a deterministic agent runtime that models workflows as an explicit state machine (a directed graph of nodes and transitions).",
      "image": "https://cdn-images-1.medium.com/max/2560/1*jqO9u78Qrcxr7a4iqs1x5w.png",
      "url": "https://medium.com/@ShawnBasquiat/agentflow-v2-deep-dive-state-tools-and-orchestration-14c197fdbf3a",
      "button": {
        "Read": "https://medium.com/@ShawnBasquiat/agentflow-v2-deep-dive-state-tools-and-orchestration-14c197fdbf3a"
      }
    },

  
    "100+ Models, One Builder: Flowise's Integration Layer":{
      "title": "100+ Models, One Builder: Flowise's Integration Layer",
      "type": "blog",
      "subTitle": "Flowise AI, Model-Agnostic Connectors, 100+ LLMs & Vector DBs",
      "keywords": "Flowise FlowiseAI integration-layer model-agnostic 100-plus-models connectors LLMs embeddings vector-databases plug-and-play OpenAI GPT4 GPT4o GPT41 Azure-OpenAI Google-Vertex-AI Anthropic Claude Meta Llama3 Mistral Cohere HuggingFace Transformers Ollama local-models self-hosted on-prem AWS-Bedrock API-adapters provider-routing fallback failover load-balancing retries rate-limiting key-management secrets-management environment-switching multi-tenant observability tracing metrics logging telemetry OpenTelemetry SDK REST GraphQL webhooks streaming SSE gRPC Node.js TypeScript Python Docker Kubernetes Helm CI-CD Terraform security IAM OAuth SSO VPC private-networking data-residency compliance GDPR SOC2 caching tokenization text-embeddings indexing upserts batch-ingestion hybrid-search BM25 semantic-search re-ranking cross-encoders prompt-templates tool-use function-calling json-schema agents memory retrieval RAG pipelines knowledge-base no-code visual-builder drag-and-drop connector-SDK plugins adapter-pattern abstractions interfaces config YAML JSON versioning testing mocking sandbox feature-flags alerts dashboards Pinecone Weaviate Qdrant Milvus Chroma pgvector Redis-vector-store Elasticsearch Vespa Supabase Neon",
      "description": "A unified, model-agnostic integration layer in Flowise that exposes consistent chat, embeddings, and vector-store interfaces across 100+ providers.",
      "image": "https://cdn-images-1.medium.com/max/2560/1*CLmU88ulpACzqa_HuwVWoQ.png",
      "url": "https://medium.com/@ShawnBasquiat/100-models-one-builder-flowises-integration-layer-038117088803",
      "button": {
        "Read": "https://medium.com/@ShawnBasquiat/100-models-one-builder-flowises-integration-layer-038117088803"
      }
    },

  
    "Inside Flowise: How Agentflow Orchestrates Multi-Agent Systems":{
      "title": "Inside Flowise: How Agentflow Orchestrates Multi-Agent Systems",
      "type": "blog",
      "subTitle": "Flowise, Agentflow V2, Multi-agent Orchestration",
      "keywords": "Flowise Agentflow V2 multi-agent orchestration state machine deterministic orchestration directed graph node graph workflow engine tool calling function calling tool router RAG retrieval-augmented generation memory modules knowledge base vector databases connectors embeddings semantic search summarization routing guardrails evaluation observability tracing logging metrics monitoring dashboards retries retry policies exponential backoff timeouts circuit breakers idempotency checkpoints caching concurrency control parallelism scheduling queueing event-driven workflows message passing webhooks REST APIs streaming tokens context window management prompt templates prompt chaining UI canvas drag-and-drop no-code visual programming versioning audit logs governance access control secrets management environment variables CI/CD DevOps Docker Kubernetes self-hosted on-prem cloud OpenAI Anthropic Google Vertex AI Hugging Face Ollama LangChain LlamaIndex Pinecone Chroma Milvus Weaviate Redis Postgres Kafka ETL data connectors document loaders PDF ingestion chunking vectorization re-ranking SLA error handling fallbacks escalation human-in-the-loop approval loops tests unit tests A/B testing evaluation datasets deterministic replay session transcripts tracing spans span attributes",
      "description": "Explains how Flowise's Agentflow uses an explicit state machine and graph-based execution to coordinate reliable multi-agent workflows, tools, and memory. Covers patterns for tool routing, retries, tracing, and no-code composition to scale complex agent teams.",
      "image": "https://cdn-images-1.medium.com/max/2560/1*ZNHQ8AyGTpUqAkI9OkuckA.png",
      "url": "https://medium.com/@ShawnBasquiat/inside-flowise-how-agentflow-orchestrates-multi-agent-systems-25f9e93e6dd0",
      "button": {
        "Read": "https://medium.com/@ShawnBasquiat/inside-flowise-how-agentflow-orchestrates-multi-agent-systems-25f9e93e6dd0"
      }
    },


    "The Fastest Path to a Useful Agent - AI workflows with Flowise and Replicate":{
      "title": "The Fastest Path to a Useful Agent - AI workflows with Flowise and Replicate",
      "type": "blog",
      "subTitle": "Flowise, Replicate, AI Agent Workflows",
      "keywords": "Flowise Replicate AI agents workflow automation LLM agent orchestration no-code AI visual builder AI workflow RAG machine learning API integration LeonardoAI minimax speech generation image generation chat flows LLM Chain Chat Prompt Template workflow iteration observable workflows repeatable workflows GPU-free deployment model catalog on-demand models visual canvas drag-and-drop agent builder practical AI framework automated workflows HTTP requests workflow orchestration chat agent multi-step workflows",
      "description": "Learn how to build AI agent workflows using Flowise and Replicate. Cut iteration cycles by 25%+ by making every step repeatable and observable. A practical framework to go from idea to working agent to reliable workflow in minutes.",
      "image": "https://cdn-images-1.medium.com/max/2400/1*cPwIuhArZKdP_q5Xbdzj6A.png",
      "url": "https://shawncharles.com/blog/2026/flowise-replicate-agent.html",
      "button": {
        "Read": "https://shawncharles.com/blog/2026/flowise-replicate-agent.html"
      }
    },



  // --- Add more entries below in the same shape ---
  // "Another Project Title": {
  //   title: "Another Project Title",
  //   type: "video", // or "project"
  //   subTitle: "Tech, Framework, APIs",
  //   keywords: "JavaScript Express.js Runware SDK",
  //   description: "One-sentence summary of what this does.",
  //   image: "https://example.com/preview.jpg",
  //   url: "https://shawmcharles.com"
  //   button: {
  //     "Code Repo": "https://github.com/yourname/your-repo",
  //     "Watch Video": "https://youtube.com/your-video",
  //   },
  // },
};


window.blogData = blogData;






