import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const gamecardSkeleton = () => {
  return (
    <Card >
      <Skeleton height="200px">
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default gamecardSkeleton;
