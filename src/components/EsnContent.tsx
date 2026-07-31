"use client";

import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Tag,
  Text,
  Row,
} from "@once-ui-system/core";
import { esn, person, social } from "@/resources";
import styles from "@/components/about/about.module.scss";
import React from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function EsnContent() {
  const { locale } = useLanguage();

  const introTitle = esn.intro.titleI18n?.[locale] ?? esn.intro.title;
  const rolesTitle = esn.roles.titleI18n?.[locale] ?? esn.roles.title;

  return (
    <Column maxWidth="m">
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
              Pisa, Tuscany, Italy
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
              {esn.intro.descriptionI18n?.[locale] ?? esn.intro.description}
            </Column>
          )}

          {esn.roles.display && (
            <>
              <Heading as="h2" variant="display-strong-s" marginBottom="m">
                {rolesTitle}
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
