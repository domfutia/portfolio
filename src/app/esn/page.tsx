import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, esn, person, social } from "@/resources";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: esn.title,
    description: esn.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(esn.title)}`,
    path: esn.path,
  });
}

export default function Esn() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={esn.title}
        description={esn.description}
        path={esn.path}
        image={`/api/og/generate?title=${encodeURIComponent(esn.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${esn.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Row fillWidth s={{ direction: "column" }} horizontal="center">
        {esn.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Row>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column fillWidth minHeight="160" vertical="center" marginBottom="32">
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              Erasmus Student Network Pisa
            </Text>
            {social.length > 0 && (
              <Row
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social
                  .filter((item) => item.essential)
                  .map(
                    (item) =>
                      item.link && (
                        <React.Fragment key={item.name}>
                          <Row s={{ hide: true }}>
                            <Button
                              key={item.name}
                              href={item.link}
                              prefixIcon={item.icon}
                              label={item.name}
                              size="s"
                              weight="default"
                              variant="secondary"
                            />
                          </Row>
                          <Row hide s={{ hide: false }}>
                            <IconButton
                              size="l"
                              key={`${item.name}-icon`}
                              href={item.link}
                              icon={item.icon}
                              variant="secondary"
                            />
                          </Row>
                        </React.Fragment>
                      ),
                  )}
              </Row>
            )}
          </Column>

          {esn.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {esn.intro.description}
            </Column>
          )}

          {esn.roles.display && (
            <>
              <Heading as="h2" variant="display-strong-s" marginBottom="m">
                {esn.roles.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {esn.roles.items.map((item, index) => (
                  <Column key={`${item.organization}-${item.role}-${index}`} fillWidth>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text variant="heading-strong-l">{item.organization}</Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {item.timeframe}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {item.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {item.achievements.map((achievement: React.ReactNode, i: number) => (
                        <Text as="li" variant="body-default-m" key={`${item.organization}-${i}`}>
                          {achievement}
                        </Text>
                      ))}
                    </Column>
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Row>
    </Column>
  );
}
