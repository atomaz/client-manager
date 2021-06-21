import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinTable
} from "typeorm";
import { Client } from "./client"

@Entity()
export class Address {

  @PrimaryGeneratedColumn()
  uuid: string;

  @Column()
  country: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  addressLine: string;

  @Column()
  zipcode: string;

  @ManyToOne(type => Client, client => client.addresses)
  client: Client;
}
