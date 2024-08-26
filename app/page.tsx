import { Suspense } from 'react';
import { Search, MainLayout, CharactersListSkeleton, CharactersList, Pagination, PaginationSkeleton } from '@/components'

import { Col, Flex, Row } from 'antd';

type HomePageProps = {
  searchParams?: {
    query?: string;
    page?: string;
  };
}

export default function Home(props: HomePageProps) {
  const { searchParams } = props;
  const query = searchParams?.query || '';
  const page = Number(searchParams?.page) || 1;

  return (
    <MainLayout
      ContentComponent={
        <Flex vertical gap={12}>
          <Row gutter={16} justify="center" align='middle'>
            <Col span={16}>
              <Search />
            </Col>
          </Row>
          <Row gutter={16} justify="center" align='middle' wrap>
            <Col span={16}>
              <Suspense
                key={`${query}:${page}:list`}
                fallback={<CharactersListSkeleton />}
              >
                <CharactersList query={query} page={page} />
              </Suspense>
            </Col>
          </Row>
        </Flex>
      }
      FooterComponent={
        <Suspense
          key={`${query}:pagination`}
          fallback={<PaginationSkeleton />}
        >
          <Pagination query={query} page={page} />
        </Suspense>
        }
    />
  );
}
