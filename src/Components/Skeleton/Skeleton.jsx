import React from "react";
import { Skeleton } from "antd";

const SkeletonProduct = () => (
	<div className="SkeletonProduct">
		<Skeleton
			active
			paragraph={{ rows: 1 }}
			avatar={{
				size: "large",
				shape: "square",
				style: { width: "200px", height: "150px", marginBottom: "8px" },
			}}
		/>
		<Skeleton
			active
			title={{ width: "60%" }}
			paragraph={false}
			className="SkeletonTitle"
		/>
		<Skeleton
			active
			title={{ width: "40%" }}
			paragraph={false}
			className="SkeletonPrice"
		/>
	</div>
);

export default SkeletonProduct;
