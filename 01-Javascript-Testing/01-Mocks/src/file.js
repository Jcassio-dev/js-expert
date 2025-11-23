const { readFile } = require("fs/promises");
const { error } = require("./constants");

const DEFAULT_OPTION = {
  maxLines: 3,
  fields: ["id", "name", "profession", "age"],
};

class File {
  static async csvToJson(filePath) {
    const content = await readFile(filePath, "utf8");

    const [header, ...lines] = content.split(/\r?\n/);

    const validation = this.#isValid(header, lines);

    if (!validation.valid) throw new Error(validation.error);

    const result = this.#parseCsvToJson(header, lines);

    return result;
  }

  static #isValid(header, lines, options = DEFAULT_OPTION) {
    const isHeaderValid = header === options.fields.join(",");

    if (!isHeaderValid) {
      return {
        error: error.FILE_FIELDS_ERROR_MESSAGE,
        valid: false,
      };
    }

    if (!lines.length || lines.length > options.maxLines) {
      return {
        error: error.FILE_LENGTH_ERROR_MESSAGE,
        valid: false,
      };
    }

    return { valid: true };
  }

  static #parseCsvToJson(header, lines) {
    const headerArr = header.split(",");

    const users = lines.map((line) => {
      const columns = line.split(",");
      const user = {};
      for (const index in columns) {
        user[headerArr[index]] = columns[index].trim();
      }

      return user;
    });
    return users;
  }
}

module.exports = File;
