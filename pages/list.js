/*
 * @Author: sylvanas
 * @Date: 2021-01-16 21:58:59
 * @LastEditors: sylvanas
 * @LastEditTime: 2021-01-16 22:55:04
 * @Description:
 */
import { readFile } from 'fs'
import { promisify } from 'util'
import { join } from 'path'

// readFile是异步的，通过回调返回结果
// promisify 可以将异步回调的方法转换为 promise 的方法
const read = promisify(readFile)

export default function List({ data }) {
	return (
		<div>
			List page
			<div>{data}</div>
		</div>
	)
}

// export async function getStaticProps() {
// 	const data = await read(join(process.cwd(), 'pages', '_app.js'), 'utf-8')
// 	console.log(data)
// 	return {
// 		props: {
// 			data,
// 		},
// 	}
// }

export async function getServerSideProps(context) {
	// context 上下文对象，其中的 query 为请求时携带的参数
	console.log(context.query)
	const data = await read(join(process.cwd(), 'pages', '_app.js'), 'utf-8')

	return {
		props: {
			data,
		},
	}
}
