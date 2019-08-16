
exports.up = function(knex) {
return knex.schema.createTable('project', tbl => {
    tbl.increments();
    tbl.text("tasks")
    tbl.text("resource")
})
};

exports.down = function(knex) {
    return knex.schema.dropTable('project');
};
