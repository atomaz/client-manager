import  {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinTable
} from "typeorm";
import { Address } from "./address";

@Entity()
export class Client {

  @PrimaryGeneratedColumn()
  uuid: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  birthday: Date;

  @OneToMany(() => Address, address => address.client)
  addresses: Address[];
}
