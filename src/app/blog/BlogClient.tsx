"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./blog.module.scss";

export const BlogClient = () => {
  const [activeTag, setActiveTag] = useState("all");

  const articles = [
    {
      num: "02 · DevOps series",
      title: "Implementing CI/CD with Jenkins",
      desc: "From pushing code to deploying containers — automating the pipeline that runs every time I commit to Startopsy. Jenkinsfile anatomy, Docker build stages, and pushing to a private registry.",
      tagLabel: "DevOps",
      readTime: "10 min",
      progress: "45%",
      progressColor: "#0F6E56",
      iconBg: styles.aiDevops,
      iconClass: "ti ti-settings-automation",
      iconColor: "#0F6E56",
      tagClass: styles.tagDevops,
      filterTag: "devops",
      slug: "cicd-with-jenkins",
    },
    {
      num: "03 · DevOps series",
      title: "Containerizing Microservices with Docker",
      desc: "Multi-stage Dockerfiles, layer caching tricks that cut build times in half, and how Docker Compose ties all Startopsy services together in one command. The stuff I wish someone told me first.",
      tagLabel: "Docker",
      readTime: "9 min",
      progress: "30%",
      progressColor: "#185FA5",
      iconBg: styles.aiDocker,
      iconClass: "ti ti-box",
      iconColor: "#185FA5",
      tagClass: styles.tagDocker,
      filterTag: "docker",
      slug: "containerizing-with-docker",
    },
    {
      num: "04 · DevOps series",
      title: "Deploying to Kubernetes",
      desc: "Pods, Deployments, Services, and Ingress — explained through actually deploying Startopsy's AI Orchestrator. Plus why I used LocalStack before touching a real AWS account.",
      tagLabel: "K8s",
      readTime: "12 min",
      progress: "20%",
      progressColor: "#3B6D11",
      iconBg: styles.aiK8s,
      iconClass: "ti ti-affiliate",
      iconColor: "#3B6D11",
      tagClass: styles.tagDevops,
      filterTag: "devops",
      slug: "deploying-to-kubernetes",
    },
    {
      num: "05 · DevOps series",
      title: "Monitoring with Prometheus & Grafana",
      desc: 'What does "my service is healthy" actually mean? Setting up metrics scraping, building Grafana dashboards for the AI Orchestrator, and alerting before users notice something\'s wrong.',
      tagLabel: "Observability",
      readTime: "11 min",
      progress: "15%",
      progressColor: "#1D9E75",
      iconBg: styles.aiDevops,
      iconClass: "ti ti-chart-line",
      iconColor: "#0F6E56",
      tagClass: styles.tagDevops,
      filterTag: "devops",
      slug: "monitoring-with-prometheus-grafana",
    },
    {
      num: "06 · DevOps series",
      title: "Centralized Logging with the ELK Stack",
      desc: "When five services write logs to five different places, debugging becomes archaeology. Elasticsearch + Logstash + Kibana, configured for a multi-container Startopsy environment.",
      tagLabel: "Logging",
      readTime: "9 min",
      progress: "10%",
      progressColor: "#185FA5",
      iconBg: styles.aiDocker,
      iconClass: "ti ti-stack",
      iconColor: "#185FA5",
      tagClass: styles.tagDocker,
      filterTag: "devops",
      slug: "centralized-logging-elk-stack",
    },
    {
      num: "07 · Redis deep dive",
      title: "Redis for Startups — Cache, Queue, Pub/Sub",
      desc: "Redis isn't just a cache. I use it in Startopsy for AI response caching, job queues between microservices, and real-time competitor analysis streaming. Three use cases, one tool.",
      tagLabel: "Redis",
      readTime: "13 min",
      progress: "60%",
      progressColor: "#D85A30",
      iconBg: styles.aiRedis,
      iconClass: "ti ti-database",
      iconColor: "#993C1D",
      tagClass: styles.tagRedis,
      filterTag: "redis",
      slug: "redis-for-startups",
    },
    {
      num: "08 · System design",
      title: "Designing Startopsy — Monolith to Microservices",
      desc: "Why Startopsy started as a Next.js monolith, when it stopped being enough, and how I identified the AI Orchestrator as the right first service to extract. A real migration story.",
      tagLabel: "System design",
      readTime: "14 min",
      progress: "80%",
      progressColor: "#7F77DD",
      iconBg: styles.aiSystem,
      iconClass: "ti ti-topology-star",
      iconColor: "#534AB7",
      tagClass: styles.tagSystem,
      filterTag: "system",
      slug: "startopsy-monolith-to-microservices",
    },
    {
      num: "09 · System design",
      title: "API Gateway Patterns for Microservices",
      desc: "Routing, auth, rate limiting — why your microservices shouldn't handle all that themselves. BFF pattern vs. a single gateway, and what I chose for Startopsy's architecture.",
      tagLabel: "Architecture",
      readTime: "10 min",
      progress: "35%",
      progressColor: "#7F77DD",
      iconBg: styles.aiSystem,
      iconClass: "ti ti-network",
      iconColor: "#534AB7",
      tagClass: styles.tagSystem,
      filterTag: "system",
      slug: "api-gateway-patterns",
    },
    {
      num: "10 · System design",
      title: "Database-per-Service: Prisma & Isolation",
      desc: "One of the hardest parts of Startopsy's migration: splitting a shared PostgreSQL schema so each service owns its own data. Foreign keys across services, and how event sourcing replaces them.",
      tagLabel: "Backend",
      readTime: "11 min",
      progress: "25%",
      progressColor: "#7F77DD",
      iconBg: styles.aiSystem,
      iconClass: "ti ti-table",
      iconColor: "#534AB7",
      tagClass: styles.tagSystem,
      filterTag: "system",
      slug: "database-per-service-prisma",
    },
    {
      num: "11 · System design",
      title: "Building an AI Orchestrator from Scratch",
      desc: "Startopsy's AI co-founder, BMC generator, and competitor analysis all flow through one orchestrator. How I designed it to be stateless, scalable, and swap-friendly between LLM providers.",
      tagLabel: "AI / Backend",
      readTime: "15 min",
      progress: "70%",
      progressColor: "#D85A30",
      iconBg: styles.aiRedis,
      iconClass: "ti ti-brain",
      iconColor: "#993C1D",
      tagClass: styles.tagSystem,
      filterTag: "system",
      slug: "building-ai-orchestrator",
    },
  ];

  const filteredArticles = articles.filter(
    (a) =>
      activeTag === "all" ||
      a.filterTag === activeTag ||
      (activeTag === "devops" && a.filterTag === "docker")
  );

  const showFeatured = activeTag === "all" || activeTag === "devops";

  return (
    <div className={styles.blog}>


      {/* Filter bar */}
      <div className={styles.filterBar}>
        {[
          { label: "All articles", tag: "all" },
          { label: "DevOps series", tag: "devops" },
          { label: "Redis", tag: "redis" },
          { label: "System design", tag: "system" },
        ].map(({ label, tag }) => (
          <button
            key={tag}
            className={`${styles.filterBtn} ${activeTag === tag ? styles.filterBtnActive : ""}`}
            onClick={() => setActiveTag(tag)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Featured Article */}
      {showFeatured && (
        <section className={styles.featured}>
          <Link href="/blog/microservices-monorepo-vs-polyrepo" style={{ textDecoration: "none" }}>
          <div className={styles.featuredCard}>
            <div>
              <div className={styles.featuredBadge}>Featured · DevOps Series</div>
              <h2 className={styles.featuredTitle}>
                Setting Up Microservices Repositories — A Monorepo vs Polyrepo Decision
              </h2>
              <p className={styles.featuredDesc}>
                When I started migrating Startopsy from a monolith to microservices, the first
                question wasn&apos;t Docker or Kubernetes — it was: where do all these repos live?
                Here&apos;s how I thought through it.
              </p>
              <div className={styles.featuredMeta}>
                <span className={`${styles.tag} ${styles.tagDevops}`}>DevOps</span>
                <span className={styles.readTime}>
                  <i className="ti ti-clock" aria-hidden="true" /> 8 min read
                </span>
                <button className={styles.readBtn}>
                  Read article <i className="ti ti-arrow-right" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Code preview */}
            <div className={styles.codePreview}>
              <div className={styles.codeBar}>
                <div className={`${styles.dot} ${styles.d1}`} />
                <div className={`${styles.dot} ${styles.d2}`} />
                <div className={`${styles.dot} ${styles.d3}`} />
              </div>
              <span className={styles.cCm}># startopsy/ monorepo structure</span>
              <span className={styles.cDef}>├── <span className={styles.cFn}>services/</span></span>
              <span className={styles.cDef}>│   ├── <span className={styles.cStr}>ai-orchestrator/</span></span>
              <span className={styles.cDef}>│   ├── <span className={styles.cStr}>auth-service/</span></span>
              <span className={styles.cDef}>│   ├── <span className={styles.cStr}>canvas-service/</span></span>
              <span className={styles.cDef}>│   └── <span className={styles.cStr}>legal-service/</span></span>
              <span className={styles.cDef}>├── <span className={styles.cFn}>packages/</span></span>
              <span className={styles.cDef}>│   ├── <span className={styles.cStr}>shared-types/</span></span>
              <span className={styles.cDef}>│   └── <span className={styles.cStr}>ui-components/</span></span>
              <span className={styles.cDef}>├── <span className={styles.cKw}>docker-compose</span>.yml</span>
              <span className={styles.cDef}>└── <span className={styles.cKw}>turbo</span>.json</span>
            </div>
          </div>
          </Link>
        </section>
      )}

      {/* Articles Grid */}
      <div className={styles.articlesGrid}>
        {filteredArticles.map((article, idx) => (
          <Link key={idx} href={`/blog/${article.slug}`} style={{ textDecoration: "none" }}>
          <div className={styles.articleCard}>
            <div className={styles.articleNum}>{article.num}</div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "0.6rem",
              }}
            >
              <h3 className={styles.articleTitle} style={{ margin: 0, maxWidth: "78%" }}>
                {article.title}
              </h3>
              <div className={`${styles.articleIcon} ${article.iconBg}`}>
                <i className={article.iconClass} aria-hidden="true" style={{ color: article.iconColor }} />
              </div>
            </div>
            <p className={styles.articleDesc}>{article.desc}</p>
            <div className={styles.articleFooter}>
              <span className={`${styles.tag} ${article.tagClass}`}>{article.tagLabel}</span>
              <span className={styles.readTime}>{article.readTime}</span>
            </div>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: article.progress, background: article.progressColor }}
              />
            </div>
          </div>
          </Link>
        ))}
      </div>

      {/* Series strip */}
      <div className={styles.seriesStrip}>
        <div>
          <div className={styles.seriesLabel}>Currently in progress</div>
          <div className={styles.seriesTitle}>The Startopsy DevOps Series — 6 articles</div>
        </div>
        <div>
          <div className={styles.seriesLabel} style={{ marginBottom: 8 }}>Progress</div>
          <div className={styles.seriesSteps}>
            <div className={`${styles.stepDot} ${styles.stepDotDone}`} title="Repo setup" />
            <div className={`${styles.stepDot} ${styles.stepDotDone}`} title="CI/CD" />
            <div className={`${styles.stepDot} ${styles.stepDotActive}`} title="Docker" />
            <div className={styles.stepDot} title="K8s" />
            <div className={styles.stepDot} title="Prometheus" />
            <div className={styles.stepDot} title="ELK" />
          </div>
        </div>
        <button className={styles.readBtn}>
          Start the series <i className="ti ti-arrow-right" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};
