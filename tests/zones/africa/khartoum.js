"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Khartoum"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Khartoum", { offset: true, expect: "Africa/Cairo" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Khartoum", { abbr: true }),

	"1930" : helpers.makeTestYear("Africa/Khartoum", [
		["1930-12-31T21:49:52+00:00", "23:49:52", "CAT", -120]
	]),

	"1970" : helpers.makeTestYear("Africa/Khartoum", [
		["1970-04-30T21:59:59+00:00", "23:59:59", "CAT", -120],
		["1970-04-30T22:00:00+00:00", "01:00:00", "CAST", -180],
		["1970-10-14T20:59:59+00:00", "23:59:59", "CAST", -180],
		["1970-10-14T21:00:00+00:00", "23:00:00", "CAT", -120]
	]),

	"1971" : helpers.makeTestYear("Africa/Khartoum", [
		["1971-04-29T21:59:59+00:00", "23:59:59", "CAT", -120],
		["1971-04-29T22:00:00+00:00", "01:00:00", "CAST", -180],
		["1971-10-14T20:59:59+00:00", "23:59:59", "CAST", -180],
		["1971-10-14T21:00:00+00:00", "23:00:00", "CAT", -120]
	]),

	"1972" : helpers.makeTestYear("Africa/Khartoum", [
		["1972-04-29T21:59:59+00:00", "23:59:59", "CAT", -120],
		["1972-04-29T22:00:00+00:00", "01:00:00", "CAST", -180],
		["1972-10-14T20:59:59+00:00", "23:59:59", "CAST", -180],
		["1972-10-14T21:00:00+00:00", "23:00:00", "CAT", -120]
	]),

	"1973" : helpers.makeTestYear("Africa/Khartoum", [
		["1973-04-28T21:59:59+00:00", "23:59:59", "CAT", -120],
		["1973-04-28T22:00:00+00:00", "01:00:00", "CAST", -180],
		["1973-10-14T20:59:59+00:00", "23:59:59", "CAST", -180],
		["1973-10-14T21:00:00+00:00", "23:00:00", "CAT", -120]
	]),

	"1974" : helpers.makeTestYear("Africa/Khartoum", [
		["1974-04-27T21:59:59+00:00", "23:59:59", "CAT", -120],
		["1974-04-27T22:00:00+00:00", "01:00:00", "CAST", -180],
		["1974-10-14T20:59:59+00:00", "23:59:59", "CAST", -180],
		["1974-10-14T21:00:00+00:00", "23:00:00", "CAT", -120]
	]),

	"1975" : helpers.makeTestYear("Africa/Khartoum", [
		["1975-04-26T21:59:59+00:00", "23:59:59", "CAT", -120],
		["1975-04-26T22:00:00+00:00", "01:00:00", "CAST", -180],
		["1975-10-14T20:59:59+00:00", "23:59:59", "CAST", -180],
		["1975-10-14T21:00:00+00:00", "23:00:00", "CAT", -120]
	]),

	"1976" : helpers.makeTestYear("Africa/Khartoum", [
		["1976-04-24T21:59:59+00:00", "23:59:59", "CAT", -120],
		["1976-04-24T22:00:00+00:00", "01:00:00", "CAST", -180],
		["1976-10-14T20:59:59+00:00", "23:59:59", "CAST", -180],
		["1976-10-14T21:00:00+00:00", "23:00:00", "CAT", -120]
	]),

	"1977" : helpers.makeTestYear("Africa/Khartoum", [
		["1977-04-23T21:59:59+00:00", "23:59:59", "CAT", -120],
		["1977-04-23T22:00:00+00:00", "01:00:00", "CAST", -180],
		["1977-10-14T20:59:59+00:00", "23:59:59", "CAST", -180],
		["1977-10-14T21:00:00+00:00", "23:00:00", "CAT", -120]
	]),

	"1978" : helpers.makeTestYear("Africa/Khartoum", [
		["1978-04-29T21:59:59+00:00", "23:59:59", "CAT", -120],
		["1978-04-29T22:00:00+00:00", "01:00:00", "CAST", -180],
		["1978-10-14T20:59:59+00:00", "23:59:59", "CAST", -180],
		["1978-10-14T21:00:00+00:00", "23:00:00", "CAT", -120]
	]),

	"1979" : helpers.makeTestYear("Africa/Khartoum", [
		["1979-04-28T21:59:59+00:00", "23:59:59", "CAT", -120],
		["1979-04-28T22:00:00+00:00", "01:00:00", "CAST", -180],
		["1979-10-14T20:59:59+00:00", "23:59:59", "CAST", -180],
		["1979-10-14T21:00:00+00:00", "23:00:00", "CAT", -120]
	]),

	"1980" : helpers.makeTestYear("Africa/Khartoum", [
		["1980-04-26T21:59:59+00:00", "23:59:59", "CAT", -120],
		["1980-04-26T22:00:00+00:00", "01:00:00", "CAST", -180],
		["1980-10-14T20:59:59+00:00", "23:59:59", "CAST", -180],
		["1980-10-14T21:00:00+00:00", "23:00:00", "CAT", -120]
	]),

	"1981" : helpers.makeTestYear("Africa/Khartoum", [
		["1981-04-25T21:59:59+00:00", "23:59:59", "CAT", -120],
		["1981-04-25T22:00:00+00:00", "01:00:00", "CAST", -180],
		["1981-10-14T20:59:59+00:00", "23:59:59", "CAST", -180],
		["1981-10-14T21:00:00+00:00", "23:00:00", "CAT", -120]
	]),

	"1982" : helpers.makeTestYear("Africa/Khartoum", [
		["1982-04-24T21:59:59+00:00", "23:59:59", "CAT", -120],
		["1982-04-24T22:00:00+00:00", "01:00:00", "CAST", -180],
		["1982-10-14T20:59:59+00:00", "23:59:59", "CAST", -180],
		["1982-10-14T21:00:00+00:00", "23:00:00", "CAT", -120]
	]),

	"1983" : helpers.makeTestYear("Africa/Khartoum", [
		["1983-04-23T21:59:59+00:00", "23:59:59", "CAT", -120],
		["1983-04-23T22:00:00+00:00", "01:00:00", "CAST", -180],
		["1983-10-14T20:59:59+00:00", "23:59:59", "CAST", -180],
		["1983-10-14T21:00:00+00:00", "23:00:00", "CAT", -120]
	]),

	"1984" : helpers.makeTestYear("Africa/Khartoum", [
		["1984-04-28T21:59:59+00:00", "23:59:59", "CAT", -120],
		["1984-04-28T22:00:00+00:00", "01:00:00", "CAST", -180],
		["1984-10-14T20:59:59+00:00", "23:59:59", "CAST", -180],
		["1984-10-14T21:00:00+00:00", "23:00:00", "CAT", -120]
	]),

	"1985" : helpers.makeTestYear("Africa/Khartoum", [
		["1985-04-27T21:59:59+00:00", "23:59:59", "CAT", -120],
		["1985-04-27T22:00:00+00:00", "01:00:00", "CAST", -180],
		["1985-10-14T20:59:59+00:00", "23:59:59", "CAST", -180],
		["1985-10-14T21:00:00+00:00", "23:00:00", "CAT", -120]
	]),

	"2000" : helpers.makeTestYear("Africa/Khartoum", [
		["2000-01-15T09:59:59+00:00", "11:59:59", "CAT", -120],
		["2000-01-15T10:00:00+00:00", "13:00:00", "EAT", -180]
	]),

	"2017" : helpers.makeTestYear("Africa/Khartoum", [
		["2017-10-31T20:59:59+00:00", "23:59:59", "EAT", -180]
	])
};