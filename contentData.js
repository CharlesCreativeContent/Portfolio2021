// contentData.js
// Data object keyed by content title; values are the content properties.
// You can import this with: import contentData from "./contentData.js";

const contentData = {
  "Runware Pokémon Generator": {
    title: "Runware Pokémon Generator: AI Image and Video Generation",
    // Choose ONE type string; `project` | `video` was pseudo-syntax
    type: "video",
    subTitle: "JavaScript, Express.js, Runware SDK",
    keywords: "JavaScript Express.js Runware SDK",
    description:
      "Generates Pokémon-inspired images and an idle-animation video for a Pokédex entry using Runware (image gen) and Google Veo3 (video).",
    image: "https://www.youtube.com/embed/oQU5E0bBPYQ?si=rQvqDHQLhuS40uWw",
    url: "https://github.com/CharlesCreativeContent/runware-pokemon-generator",
    button: {
      "Code Repo": "https://github.com/CharlesCreativeContent/runware-pokemon-generator",
      "Watch Video": "https://youtu.be/oQU5E0bBPYQ",
    },
  },

  "Text-2-Video with BentoML": {
      "title": "Text-2-Video with BentoML",
      "type": "project",
      "subTitle": "Python, BentoML, XTTS, VLLM, SDXL-Turbo",
      "keywords": "Python BentoML XTTS VLLM SDXL-Turbo Text-to-Video",
      "image": "https://github.com/CharlesCreativeContent/myImages/blob/main/images/Happy_New_Year_Card.png?raw=true",
      "description": "Text-to-video pipeline and API using only open-source models, containerized for deployment on any cloud platform.",
      "url": "https://github.com/CharlesCreativeContent/BentoText2Video",
      "button": {
        "Code Repo": "https://github.com/CharlesCreativeContent/BentoText2Video"
      }
    },

  "GenUI with C1 API: How to Build with Generative UI":  {
      "title": "GenUI with C1 API: How to Build with Generative UI",
      "type": "video",
      "subTitle": "Generative UI, React, APIs",
      "keywords": "Generative UI C1 React APIs Thesys",
      "image": "https://www.youtube.com/embed/videoseries?si=le3cFJuQ-_NVNSPj&list=PLTX9b_8iXKiT1TO1skP7zymXCOsYJ7690",
      "description": "Learn how to build intelligent user interfaces using the C1 Generative UI API. Walkthrough of creating a GenUI app from scratch, enabling dynamic UI generation powered by modern backend logic.",
      "url": "https://docs.thesys.dev/",
      "button": {
        "Watch Series": "https://www.youtube.com/@ThesysDev/videos"
      }
    },
    "Building an AI Clinic Agent with Toolhouse": {
      "title": "Building an AI Clinic Agent with Toolhouse",
      "type": "video",
      "image": "https://www.youtube.com/embed/LwKPnH0198E?si=rQvqDHQLhuS40uWw",
      "subTitle": "Python, JavaScript, OpenAI, Toolhouse SDK",
      "keywords": "Python JavaScript OpenAI Toolhouse SDK RAG Agents",
      "description": "RAG pipeline that integrates tools like web scrapers, memory, and time management to solve communication challenges in health clinics.",
      "url": "https://github.com/CharlesCreativeContent/toolhouse-examples",
      "button": {
        "Code Repo": "https://github.com/CharlesCreativeContent/toolhouse-examples",
        "Watch Video": "https://www.youtube.com/watch?v=LwKPnH0198E"
      }
    },


"Ecommerce Application using Composable APIs from Elastic Path":{
      "title": "Ecommerce Application using Composable APIs from Elastic Path",
      "type": "video",
      "image": "https://www.youtube.com/embed/1dHhMwfqb9w?si=gYtnb6NQXfXoEuc_",
      "subTitle": "JavaScript, Bootstrap, Sass, Node.js & Express.js, jQuery",
      "keywords": "JavaScript Bootstrap Sass Node Express jQuery Elastic Path API Postman",
      "description": "Elastic Path’s API and Postman collection to create a functional e-commerce site with cart and checkout.",
      "url": "https://github.com/CharlesCreativeContent/elastic-path-demo",
      "button": {
        "Code Repo": "https://github.com/CharlesCreativeContent/elastic-path-demo",
        "Watch Video": "https://www.youtube.com/watch?v=1dHhMwfqb9w"
      }
    },


    "Travelara: Fullstack Travel App":{
      "title": "Travelara: Fullstack Travel App",
      "type": "video",
      "image": "https://www.youtube.com/embed/roHgcmC_oXg?si=gYtnb6NQXfXoEuc_",
      "subTitle": "JavaScript, Bootstrap, Sass, Node.js, & Express.js",
      "keywords": "JavaScript Bootstrap Sass Node Express Travel App",
      "description": "Platform to help build momentous milestones along with your friends and family. Demo account: demo@demo.com / password: demo.",
      "url": "https://github.com/CharlesCreativeContent/Demo-Day",
      "button": {
        "Code Repo": "https://github.com/CharlesCreativeContent/Demo-Day",
        "Watch Video": "https://www.youtube.com/watch?v=roHgcmC_oXg"
      }
    },
    "Scaling AI Model Deployment": {
      "title": "Scaling AI Model Deployment",
      "type": "talk",
      "image": "https://github.com/CharlesCreativeContent/myImages/blob/main/images/Scaling%20AI%20Model%20Deployment%20(1).png?raw=true",
      "subTitle": "Python & BentoML",
      "keywords": "BentoML MLOps Deployment Scaling",
      "description": "A DataForAI presentation on challenges that arise after deploying models and how to take them to production.",
      "url": "https://www.canva.com/design/DAGG2_I0Ad8/Im-89seUQuXj6_ylwbALvg/watch",
      "button": {
        "Watch Video": "https://www.canva.com/design/DAGG2_I0Ad8/Im-89seUQuXj6_ylwbALvg/watch"
      }
    },

    "How To Start Freelancing in 2022!": {
      "title": "How To Start Freelancing in 2022!",
      "type": "video",
      "image": "https://www.youtube.com/embed/68Li7ukgDKg?si=iceF8ZUfRvwzqOIa&amp;start=3235",
      "subTitle": "Community taught with @LeonNoel",
      "keywords": "Freelancing 100Devs Career",
      "description": "Class fifteen of a 30-week software engineering bootcamp offered on Twitch to help folks launch a new career in software engineering.",
      "url": "https://www.youtube.com/watch?v=68Li7ukgDKg&t=53m53s",
      "button": {
        "Watch Video": "https://www.youtube.com/watch?v=68Li7ukgDKg&t=53m53s"
      }
    },


    "Thesys: Generative UI API for Enhanced AI User Experience": {
      "title": "Thesys: Generative UI API for Enhanced AI User Experience",
      "type": "video",
      "subTitle": "Generative UI, Thesys C1",
      "keywords": "Thesys Generative UI C1 API UX",
      "description": "A walkthrough of Thesys’s Generative UI API—turning text-heavy AI outputs into interactive, actionable interfaces.",
      "image": "https://www.youtube.com/embed/0E9byceH6HM?start=9",
      "url": "https://www.youtube.com/watch?v=a_ftzwSoNN4",
      "button": {
        "Watch Video": "https://www.youtube.com/watch?v=a_ftzwSoNN4"
      }
    },
    "Pieces — How Developers Use AI in Their Workflow (1,000+ Attendees)": {
      "title": "Pieces — How Developers Use AI in Their Workflow (1,000+ Attendees)",
      "type": "event",
      "subTitle": "AI Assistants, Developer Productivity",
      "keywords": "Pieces Copilot Developer Workflow AI",
      "description": "Discover real-world AI integrations that help developers code faster, smarter, and more efficiently.",
      "image": "https://github.com/CharlesCreativeContent/myImages/blob/main/images/GXxCJH8XgAAYjLf.jpg?raw=true",
      "url": "https://pieces.app/",
      "button": {
        "Watch Video": "https://www.youtube.com/watch?v=4V7BEJ7edEA",
        "Join": "https://shawncharles.com/"
      }
    },
    "Go Beyond Chat: Visualize and Act on Your Data with Xano and Thesys":{
      "title": "Go Beyond Chat: Visualize and Act on Your Data with Xano and Thesys",
      "type": "video",
      "subTitle": "Generative UI, Xano, Thesys C1",
      "keywords": "Xano Thesys C1 Generative UI Data Actions",
      "description": "Live session by Xano + Thesys — a practical look at using Generative UI to query data and take action from within the interface.",
      "image": "https://www.youtube.com/embed/FsnqOqxQDyU?si=iceF8ZUfRvwzqOIa&amp;start=3235",
      "url": "https://www.xano.com/events/go-beyond-chat-visualize-and-act-on-your-data-with-thesys",
      "button": {
        "Watch Video": "https://www.youtube.com/watch?v=FsnqOqxQDyU",
        "Code Repo": "https://github.com/thesysdev/examples"
      }
    },
    "Build CoinGecko Analytics Agents powered by Thesys Generative UI":{
      "title": "Build CoinGecko Analytics Agents powered by Thesys Generative UI",
      "type": "video",
      "subTitle": "CoinGecko MCP, Thesys Generative UI",
      "keywords": "CoinGecko MCP Thesys C1 Analytics Agents",
      "description": "Workshop on integrating the CoinGecko MCP to turn natural-language questions into interactive, real-time analytics with Thesys Generative UI components.",
      "image": "https://www.youtube.com/embed/oZP61tui0O0?si=iceF8ZUfRvwzqOIa&amp;start=3235",
      "url": "https://medium.com/@ShawnBasquiat/building-a-coin-gecko-ai-dashboard-using-thesys-generative-ui-1c77820f4d36",
      "button": {
        "Watch Video": "https://www.youtube.com/embed/oZP61tui0O0?si=iceF8ZUfRvwzqOIa&amp;start=3235",
        "Code Repo": "https://github.com/CharlesCreativeContent/CoinGecko-Thesys-MCP"
      }
    },
    "The Hunt 🎤🔥 (≈20,000 Attendees)":{
      "title": "The Hunt 🎤🔥 (≈20,000 Attendees)",
      "type": "event",
      "subTitle": "Career Strategies, Tech Job Market",
      "keywords": "The Hunt Career Job Search Tech Industry",
      "description": "Comprehensive guide offering strategies, tips, and insights for navigating the competitive tech industry job market.",
      "image": "https://github.com/CharlesCreativeContent/Portfolio2021/blob/main/images/Dark%20Blue%20and%20Yellow%20Modern%20Business%20Strategy%20Live%20Webinar%20Instagram%20Post.gif?raw=true",
      "url": "https://x.com/ShawnBasquiat/status/1553472592220246016?s=20",
      "button": {
        "Join": "https://x.com/ShawnBasquiat/status/1553472592220246016?s=20"
      }
    },
    "Daily.dev: Being a Dev in 2024 (3.4K Attendees)":{
      "title": "Daily.dev: Being a Dev in 2024 (3.4K Attendees)",
      "type": "event",
      "subTitle": "Developer Trends, Communities",
      "keywords": "daily.dev Developer Trends Communities",
      "description": "Explores the evolving landscape of software development—latest technologies, industry trends, and the skills required to succeed.",
      "image": "https://github.com/CharlesCreativeContent/myImages/raw/main/images/spaces/francesco-being-a-dev-in-2024.jpeg?raw=true",
      "url": "https://x.com/ossia/status/1732429481489387806?s=20",
      "button": {
        "Join": "https://x.com/ossia/status/1732429481489387806?s=20"
      }
    },

  
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
      "description": "Explains how Flowise’s Agentflow uses an explicit state machine and graph-based execution to coordinate reliable multi-agent workflows, tools, and memory. Covers patterns for tool routing, retries, tracing, and no-code composition to scale complex agent teams.",
      "image": "https://cdn-images-1.medium.com/max/2560/1*ZNHQ8AyGTpUqAkI9OkuckA.png",
      "url": "https://medium.com/@ShawnBasquiat/inside-flowise-how-agentflow-orchestrates-multi-agent-systems-25f9e93e6dd0",
      "button": {
        "Read": "https://medium.com/@ShawnBasquiat/inside-flowise-how-agentflow-orchestrates-multi-agent-systems-25f9e93e6dd0"
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


window.contentData = contentData;





