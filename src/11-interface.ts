export interface Driver {
  database: string;
  username: string;
  password: string;
  port: number;

  connect(): void;
}

const driver: Driver = {
  database: 'XXXXX',
  username: 'XXXX',
  password: 'XXXX',
  port: 3306
}

class MySqlDriver implements Driver {
  constructor(
    public database: string,
    public username: string,
    public password: string,
    public port: number,
    public host: string

  ) { }
  connect(): void {
    //code
  }
}
class OracleDriver implements Driver {
  constructor(
    public database: string,
    public username: string,
    public password: string,
    public port: number
  ) { }
  connect(): void {
    //code
  }
}
class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public username: string,
    public password: string,
    public port: number
  ) { }
  connect(): void {
    //code
  }
}
class SqlServerDriver implements Driver {
  constructor(
    public database: string,
    public username: string,
    public password: string,
    public port: number
  ) { }
  connect(): void {
    //code
  }
}

