import { v4 as uuid4 } from "uuid";
import { hash } from "bcryptjs";

import createConnection from "../index"

async function create() {
  const connection = await createConnection("localhost");
  const id = uuid4();

  const hashpassword = await hash("admin", 8);

  await connection.query(
    `INSERT INTO USERS(id,name,email,password, "isAdmin", created_at, driver_license)
     values('${id}', 'admin', 'admin@admin.com.br', '${hashpassword}', true, 'now()', 'XXXXXX')
    `
  );
  await connection.close()
}

create().then(() => console.log("Admin created"));
