exports.up = function(knex,Promise) {
    return knex.schema
      .createTable("projects", tbl => {
        tbl.increments();
        tbl.text("name", 100).unique().notNullable() 
        tbl.text("description", 3000);
        tbl.boolean("completed").defaultTo(false).notNullable()
      })
      .createTable("resources", tbl => {
        tbl.increments();
        tbl.text("name", 100).unique().notNullable();
        tbl.text("description", 3000);
      })
      .createTable("tasks", tbl => {
        tbl.increments();
        tbl.integer("project_id").unsigned() .notNullable().references("id").inTable("projects").onDelete("RESTRICT").onUpdate("CASCADE");
        tbl.text("description", 3000).notNullable();
        tbl.text("notes", 3000);
        tbl.boolean("completed").notNullable().defaultTo(false);
      })
      .createTable("projects_resources", tbl => {
        tbl.increments();
        tbl.integer("project_id").notNullable().unsigned().inTable("projects").onDelete("RESTRICT").onUpdate("CASCADE").references("id")
        tbl
          .integer("resource_id").notNullable().inTable("resources").references("id").unsigned().onDelete("RESTRICT").onUpdate("CASCADE");
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("projects_resources")
      .dropTableIfExists("tasks")
      .dropTableIfExists("resources")
      .dropTableIfExists("projects");
  }  