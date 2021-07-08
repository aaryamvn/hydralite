import { Field, InputType } from "type-graphql";

@InputType()
export class FindHashtagByIdArgs {
  @Field()
  id: string;
}
