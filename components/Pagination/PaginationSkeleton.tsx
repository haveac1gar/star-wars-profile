'use client';

import React from "react";
import { Skeleton } from 'antd';

const { Input: SkeletonInput } = Skeleton;

export const PaginationSkeleton = () => {
	return (
		<SkeletonInput />
	);
}
