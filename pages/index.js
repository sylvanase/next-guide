import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<>
			<Head>
				<title> 使用组件修改元数据 </title>
			</Head>
			<div className={styles.container}>
				index page
				<Link href="/list">
					<a className="demo">jump to list page</a>
				</Link>
				<img src="/images/1.jpg" alt="" />
			</div>
			<style jsx>{`
				.demo {
					color: red;
				}
			`}</style>
		</>
	)
}
