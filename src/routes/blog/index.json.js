import getFaunaposts from "./_faunaposts.js";

export async function get(req, res) {

    const faunaposts = await getFaunaposts()

    const contents = JSON.stringify(
        faunaposts.map((post) => {
            console.log(post)
            return {
                title: post.title,
                slug: post.slug,
            };
        })
    );

    res.writeHead(200, {
        "Content-Type": "application/json",
    });

    res.end(contents);
}