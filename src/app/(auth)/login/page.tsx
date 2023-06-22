'use client'
import axios from 'axios'

const page = async () => {
	const { data } = await axios.get(
		'https://jsonplaceholder.typicode.com/posts/1',
	)

	return <div>{JSON.stringify(data)}</div>
}

export default page
