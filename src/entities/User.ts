import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

import is from "utils/validation";

@Entity("customers")
class User extends BaseEntity {
  static validations = {
    name: [is.required(), is.maxLength(100)],
    email: [is.required(), is.email(), is.maxLength(200)]
  };

  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar")
  lastname: string;

  @Column("varchar")
  firstname: string;

  @Column("varchar")
  pincode: string;

  @Column("varchar")
  email: string;

  @Column("varchar")
  login: string;

  @Column("varchar")
  password: string;

  @Column("varchar")
  mobilephone: string;
}
export default User;
