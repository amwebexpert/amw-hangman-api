import { IsLocale, IsNotEmpty, IsString } from "class-validator";

export class CategoryDto {

    @IsNotEmpty()
    @IsLocale()
    langcode: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    iconName: string;
}
