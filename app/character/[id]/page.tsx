import { Suspense } from 'react';
import { MainLayout, CharacterCard, CharacterCardSkeleton } from '@/components'

import { Col, Flex, Row } from 'antd';

type CharacterPageProps = {
  params: {
    id: string;
  };
}

export default function CharacterPage(props: CharacterPageProps) {
  const { params } = props;
	const characterId = Number(params.id);

  return (
    <MainLayout
      ContentComponent={
        <Flex vertical gap={12}>
          <Row gutter={16} justify="center" align='middle'>
            <Col span={16}>
              <Suspense
                key={`${characterId}:character`}
                fallback={<CharacterCardSkeleton />}
              >
								<CharacterCard id={characterId} />
              </Suspense>
            </Col>
          </Row>
        </Flex>
      }
    />
  );
}
