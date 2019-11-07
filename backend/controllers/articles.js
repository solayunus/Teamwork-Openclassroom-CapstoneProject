const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'teamworkDB',
    password: 'pass1245',
    port: 5432,
});


//post article
const createArticle = (request, response) => {
    const { title, article } = request.body

    pool.query('INSERT INTO articles (title, article) VALUES ($1, $2)', [title, article], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(201).send(`User added with ID: ${results.insertId}`)
    })
};
//PATCH /edit article 
const updateArticle = (request, response) => {
    const id = parseInt(request.params.id);
    const { title, article } = request.body;

    pool.query(
        'UPDATE articles SET title = $1, article = $2 WHERE id = $3', [title, article, id],
        (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).send(`User modified with ID: ${id}`);
        }
    )
};
//delete article
const deleteArticle = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('DELETE FROM articles WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
};
//commen article

//get article
const getArticles = (request, response) => {
    pool.query('SELECT * FROM articles ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    })
};

module.exports = {
    getArticles,
    createArticle,
    updateArticle,
    deleteArticle
};