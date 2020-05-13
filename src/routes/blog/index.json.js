import faunaposts from "./_faunaposts.js";

    console.log('fp3: ',faunaposts)
const contents = JSON.stringify(
	faunaposts.map((post) => {
		console.log(post)
		return {
			title: post.title,
			slug: post.slug,
		};
	})
);

export function get(req, res) {
	res.writeHead(200, {
		"Content-Type": "application/json",
	});

	res.end(contents);
}
