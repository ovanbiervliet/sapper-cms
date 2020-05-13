// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

import posts from "./_posts";

const faunadb = require('faunadb')
const q = faunadb.query
const client = new faunadb.Client({  secret: 'fnADrk_S37ACAUhcNFyzW-12-mNarO0G5lLXlN98' })

var faunaposts = []

client.query(
	q.Map(
		q.Paginate(q.Documents(q.Collection('posts'))),
		q.Lambda(x => q.Get(x))
	))

	// q.Paginate(
	// 	q.Select(
	// 		['data','Ref'],
	// 		q.Documents(
	// 			q.Collection('posts')
	// 			)
	// 		)
	// 	)
	// )
	.then(res => {
			faunaposts = res
			console.log('fp1: ', faunaposts)
			}
)

export default faunaposts;