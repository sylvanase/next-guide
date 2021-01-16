import { useRouter } from 'next/router'
// 显示详情
export default function Post({ data }) {
	const router = useRouter()
	if (router.isFallback) {
		return <div>loading</div>
	}
	return (
		<>
			<div>
				<span>{data.id}</span>
				<span>{data.title}</span>
			</div>
		</>
	)
}

// 调用 getStaticPaths -> 循环路由参数 -> 调用 getStaticProps

// 返回用户可以访问到的所有路由参数
export async function getStaticPaths() {
	return {
		paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
		fallback: true,
	}
}

// 返回路由参数所对应的具体数据
export async function getStaticProps({ params }) {
	const id = params.id
	let data
	switch (id) {
		case '1':
			data = { id: '1', title: 'article1' }
			break
		case '2':
			data = { id: '2', title: 'article2' }
			break
		case '3':
			data = { id: '3', title: '不在范围内' }
			break
		default:
			data = {}
	}
	return {
		props: {
			data,
		},
	}
}
