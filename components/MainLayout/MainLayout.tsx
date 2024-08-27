'use client';

import React, { useCallback } from 'react';

import { Col, Layout, Row } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Title from 'antd/es/typography/Title';
import { usePathname, useRouter } from 'next/navigation';

import styles from './MainLayout.module.css';

type MainLayoutProps = {
  ContentComponent: React.ReactNode;
  FooterComponent?: React.ReactNode;
};

export function MainLayout(props: MainLayoutProps) {
  const { ContentComponent, FooterComponent } = props;
  const { push } = useRouter();
  const pathname = usePathname();

  const goToMain = useCallback(() => {
    if (pathname !== '/') {
      push('/');
    }
  }, [push, pathname]);

  return (
    <Layout className={styles.layout}>
      <Header className={styles.header} onClick={goToMain}>
        <Row
          gutter={16}
          justify="center"
          align="middle"
          className={styles.headerRow}
        >
          <Col span={16}>
            <Title className={styles.title} type="warning" level={2}>
              Star Wars Profiler
            </Title>
          </Col>
        </Row>
      </Header>
      <Content className={styles.contentWrapper}>{ContentComponent}</Content>
      <Footer className={styles.footer}>{FooterComponent}</Footer>
    </Layout>
  );
}
