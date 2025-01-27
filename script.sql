-- MySQL Script generated by MySQL Workbench
-- Fri Aug 12 11:57:44 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema CRAM
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema CRAM
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `CRAM` DEFAULT CHARACTER SET utf8 ;
USE `CRAM` ;

-- -----------------------------------------------------
-- Table `CRAM`.`Lugar`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CRAM`.`Lugar` (
  `IdLugar` TEXT NOT NULL,
  `Nombre` VARCHAR(50) NOT NULL,
  `Descripcion` TEXT NULL,
  PRIMARY KEY (`IdLugar`),
  UNIQUE INDEX `IdLugar_UNIQUE` (`IdLugar` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CRAM`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CRAM`.`Usuario` (
  `IdUsuario` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NOT NULL,
  `Foto` VARCHAR(500) NULL,
  `Password` VARCHAR(45) NOT NULL,
  `Username` VARCHAR(25) NOT NULL,
  `Mail` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`IdUsuario`),
  UNIQUE INDEX `idUsuario_UNIQUE` (`IdUsuario` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CRAM`.`Lista`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CRAM`.`Lista` (
  `IdLista` INT NOT NULL AUTO_INCREMENT,
  `Nombre` TEXT NOT NULL,
  `Descripcion` TEXT NOT NULL,
  `IdUsuario` INT NOT NULL,
  `Usuario_IdUsuario` INT NOT NULL,
  PRIMARY KEY (`IdLista`),
  INDEX `fk_Lista_Usuario_idx` (`Usuario_IdUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_Lista_Usuario`
    FOREIGN KEY (`Usuario_IdUsuario`)
    REFERENCES `CRAM`.`Usuario` (`IdUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CRAM`.`Seguido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CRAM`.`Seguido` (
  `idSeguido` INT NOT NULL AUTO_INCREMENT,
  `IdUsuario` VARCHAR(45) NOT NULL,
  `Usuario_IdUsuario` INT NOT NULL,
  PRIMARY KEY (`idSeguido`),
  INDEX `fk_Seguido_Usuario1_idx` (`Usuario_IdUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_Seguido_Usuario1`
    FOREIGN KEY (`Usuario_IdUsuario`)
    REFERENCES `CRAM`.`Usuario` (`IdUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CRAM`.`Review`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CRAM`.`Review` (
  `idReview` INT NOT NULL AUTO_INCREMENT,
  `Destacar` VARCHAR(80) NOT NULL,
  `Descripcion` TEXT NOT NULL,
  `Comentarios` TEXT NULL,
  `IdUsuario` INT NOT NULL,
  `IdLugar` INT NOT NULL,
  `Puntaje` INT NOT NULL,
  `Titulo` VARCHAR(20) NOT NULL,
  `Usuario_IdUsuario` INT NOT NULL,
  PRIMARY KEY (`idReview`),
  INDEX `fk_Review_Usuario1_idx` (`Usuario_IdUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_Review_Usuario1`
    FOREIGN KEY (`Usuario_IdUsuario`)
    REFERENCES `CRAM`.`Usuario` (`IdUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CRAM`.`LugaresXLista`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CRAM`.`LugaresXLista` (
  `IdLugar` TEXT NOT NULL,
  `IdLista` INT NOT NULL,
  `Lista_IdLista` INT NOT NULL,
  `Lugar_IdLugar` TEXT NOT NULL,
  PRIMARY KEY (`IdLugar`, `IdLista`),
  INDEX `fk_LugaresXLista_Lista1_idx` (`Lista_IdLista` ASC) VISIBLE,
  INDEX `fk_LugaresXLista_Lugar1_idx` (`Lugar_IdLugar` ASC) VISIBLE,
  CONSTRAINT `fk_LugaresXLista_Lista1`
    FOREIGN KEY (`Lista_IdLista`)
    REFERENCES `CRAM`.`Lista` (`IdLista`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_LugaresXLista_Lugar1`
    FOREIGN KEY (`Lugar_IdLugar`)
    REFERENCES `CRAM`.`Lugar` (`IdLugar`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
