-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 06-06-2022 a las 13:37:57
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `testNode`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `answer`
--

CREATE TABLE `answer` (
  `idAnswer` int(11) NOT NULL,
  `answer1` varchar(250) NOT NULL,
  `answer2` varchar(250) DEFAULT NULL,
  `answer3` varchar(250) DEFAULT NULL,
  `correctIncorrect1` tinyint(1) DEFAULT NULL,
  `correctIncorrect2` tinyint(1) DEFAULT NULL,
  `correctIncorrect3` tinyint(1) DEFAULT NULL,
  `idQuestion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `answer`
--

INSERT INTO `answer` (`idAnswer`, `answer1`, `answer2`, `answer3`, `correctIncorrect1`, `correctIncorrect2`, `correctIncorrect3`, `idQuestion`) VALUES
(1, 'res1', 'res2', 'res3', 1, 0, 0, 2),
(3, 'resres1', 'resres2', 'resres3', 0, 1, 0, 3),
(57, '1', '1', '1', NULL, NULL, NULL, 96),
(58, '2', '2', '2', NULL, NULL, NULL, 97),
(59, '1', '1', '1', NULL, NULL, NULL, 98),
(60, '2', '2', '2', NULL, NULL, NULL, 99),
(61, '3', '3', '3', NULL, NULL, NULL, 100);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `question`
--

CREATE TABLE `question` (
  `idQuestion` int(11) NOT NULL,
  `question` varchar(45) NOT NULL,
  `idTest` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `question`
--

INSERT INTO `question` (`idQuestion`, `question`, `idTest`) VALUES
(2, 'pregunta 1', 1),
(3, '123496', 1),
(6, 'respuesta correcta', 4),
(7, '', 4),
(8, '', 4),
(9, '', 4),
(10, '', 4),
(11, '', 4),
(12, '', 4),
(94, '1', 23),
(95, '2', 23),
(96, '1', 23),
(97, '2', 23),
(98, '1', 4),
(99, '2', 4),
(100, '3', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `test`
--

CREATE TABLE `test` (
  `idTest` int(11) NOT NULL,
  `code` int(11) NOT NULL,
  `test` varchar(150) NOT NULL,
  `cantQuestions` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `test`
--

INSERT INTO `test` (`idTest`, `code`, `test`, `cantQuestions`) VALUES
(1, 90906070, 'HTML', 1),
(3, 70054325, 'Prueba', 5),
(4, 42956280, 'NodeJs', 3),
(14, 82010140, 'VueJS', 3),
(16, 83121249, 'hola', 3),
(18, 14102338, 'Larave', 1),
(20, 5263426, 'VueJS', 3),
(22, 556747, 'pruba5', 4),
(23, 65608258, 'examen2', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `answer`
--
ALTER TABLE `answer`
  ADD PRIMARY KEY (`idAnswer`),
  ADD KEY `fk_answer_question1_idx` (`idQuestion`);

--
-- Indices de la tabla `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`idQuestion`),
  ADD KEY `fk_questions_test_idx` (`idTest`);

--
-- Indices de la tabla `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`idTest`),
  ADD UNIQUE KEY `code_UNIQUE` (`code`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `answer`
--
ALTER TABLE `answer`
  MODIFY `idAnswer` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT de la tabla `question`
--
ALTER TABLE `question`
  MODIFY `idQuestion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT de la tabla `test`
--
ALTER TABLE `test`
  MODIFY `idTest` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `answer`
--
ALTER TABLE `answer`
  ADD CONSTRAINT `fk_answer_question1` FOREIGN KEY (`idQuestion`) REFERENCES `question` (`idQuestion`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `question`
--
ALTER TABLE `question`
  ADD CONSTRAINT `fk_questions_test` FOREIGN KEY (`idTest`) REFERENCES `test` (`idTest`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
