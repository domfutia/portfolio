"use client";

import { Card, Column, Row, Text } from "@once-ui-system/core";
import { formatDate } from "@/utils/formatDate";
import type { SubstackPost } from "@/utils/substack";
import Image from "next/image";

interface PostProps {
  post: SubstackPost;
  thumbnail?: boolean;
  direction?: "row" | "column";
}

export default function Post({ post, thumbnail = false, direction }: PostProps) {
  return (
<Card
  fillWidth
  key={post.slug}
  href={`/blog/${post.slug}`}
  transition="micro-medium"
      direction={direction}
      border="transparent"
      background="transparent"
      padding="4"
      radius="l-4"
      gap={direction === "column" ? undefined : "24"}
      s={{ direction: "column" }}
    >
      {post.image && thumbnail && (
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16/9",
            borderRadius: "var(--radius-l)",
            overflow: "hidden",
            border: "1px solid var(--neutral-border-weak)",
            background: "var(--neutral-background-weak)",
          }}
        >
          <Image
            src={post.image}
            alt={"Thumbnail of " + post.title}
            fill
            sizes="(max-width: 768px) 100vw, 640px"
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
        </div>
      )}
      <Row fillWidth>
        <Column maxWidth={28} paddingY="24" paddingX="l" gap="20" vertical="center">
          <Row gap="16" vertical="center" wrap>
            <Text variant="body-default-xs" onBackground="neutral-weak">
              {formatDate(post.publishedAt, false)}
            </Text>
            {post.isPaywall && (
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "2px 8px",
                  borderRadius: "var(--radius-full)",
                  background: "var(--accent-background-weak)",
                  color: "var(--accent-on-background-weak)",
                  fontSize: "var(--font-size-body-xs)",
                  fontWeight: 600,
                  lineHeight: 1.4,
                }}
              >
                🔒 Abbonati
              </span>
            )}
          </Row>
          <Text variant="heading-strong-l" wrap="balance">
            {post.title}
          </Text>
          {post.summary && (
            <Text variant="body-default-s" onBackground="neutral-weak">
              {post.summary}
              {post.summary.length >= 200 ? "…" : ""}
            </Text>
          )}
          <Text
            variant="label-strong-s"
            onBackground="brand-weak"
            style={{ marginTop: "4px" }}
          >
            Leggi su Substack →
          </Text>
        </Column>
      </Row>
    </Card>
  );
}
