'use client';

import { Col, Layout, Row } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Title from 'antd/es/typography/Title';

import styles from './MainLayout.module.css';

type MainLayoutProps = {
	ContentComponent: React.ReactNode;
	FooterComponent: React.ReactNode;
}

export const MainLayout = (props: MainLayoutProps) => {
	const { ContentComponent, FooterComponent } = props;

  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <Row gutter={16} justify="center" align='middle' className={styles.headerRow}>
          <Col span={16}>
            <Title className={styles.title} type="warning" level={2}>
              Star Wars Profiler
            </Title>
          </Col>
        </Row>
      </Header>
      <Content className={styles.contentWrapper}>
				{ContentComponent}
      </Content>
      <Footer className={styles.footer}>
				{FooterComponent}
      </Footer>
    </Layout>
  );
}
