CREATE TABLE "Occupations_Industries" (
	"occupation_id" varchar NOT NULL,
	"occupation_industry" varchar NOT NULL
);

CREATE TABLE "Men_Employment_Data" (
	"year" varchar(4) NOT NULL,
	"civilian_noninstitutional_pop" int NOT NULL,
	"total_labor_force" int NOT NULL,
	"total_labor_percent_pop" float NOT NULL,
	"total_employed" int NOT NULL,
	"employed_percent_pop" float NOT NULL,
	"employed_agriculture" int NOT NULL,
	"employed_nonagriculture" int NOT NULL,
	"total_unemployed" int NOT NULL,
	"unemployed_percent_labor_force" float NOT NULL,
	"not_in_labor_force" int NOT NULL
);

CREATE TABLE "Women_Employment_Data" (
	"year" varchar(4) NOT NULL,
	"civilian_noninstitutional_pop" int NOT NULL,
	"total_labor_force" int NOT NULL,
	"total_labor_percent_pop" float NOT NULL,
	"total_employed" int NOT NULL,
	"employed_percent_pop" float NOT NULL,
	"employed_agriculture" int NOT NULL,
	"employed_nonagriculture" int NOT NULL,
	"total_unemployed" int NOT NULL,
	"unemployed_percent_labor_force" float NOT NULL,
	"not_in_labor_force" int NOT NULL
);

CREATE TABLE "Industry_Unemployment_2022" (
	"year" varchar(4) NOT NULL,
	"occupation_id" varchar NOT NULL,
	"total_unemployed" int NOT NULL,
	"less_than_five_wks" int NOT NULL,
	"five_to_forteen_wks" int NOT NULL,
	"total_fifteen_wks_and_over" int NOT NULL,
	"fifteen_to_twenty_six_wks" int NOT NULL,
	"twenty_seven_wks_and_over" int NOT NULL,
	"avg_duration_wks" varchar NOT NULL,
	"median_duration_wks" varchar NOT NULL
);

CREATE TABLE "Industry_Unemployment_2021" (
	"year" varchar(4) NOT NULL,
	"occupation_id" varchar NOT NULL,
	"total_unemployed" int NOT NULL,
	"less_than_five_wks" int NOT NULL,
	"five_to_forteen_wks" int NOT NULL,
	"total_fifteen_wks_and_over" int NOT NULL,
	"fifteen_to_twenty_six_wks" int NOT NULL,
	"twenty_seven_wks_and_over" int NOT NULL,
	"avg_duration_wks" varchar NOT NULL,
	"median_duration_wks" varchar NOT NULL
);

CREATE TABLE "Industry_Unemployment_2020" (
	"year" varchar(4) NOT NULL,
	"occupation_id" varchar NOT NULL,
	"total_unemployed" int NOT NULL,
	"less_than_five_wks" int NOT NULL,
	"five_to_forteen_wks" int NOT NULL,
	"total_fifteen_wks_and_over" int NOT NULL,
	"fifteen_to_twenty_six_wks" int NOT NULL,
	"twenty_seven_wks_and_over" int NOT NULL,
	"avg_duration_wks" varchar NOT NULL,
	"median_duration_wks" varchar NOT NULL
);

CREATE TABLE "Industry_Unemployment_2019" (
	"year" varchar(4) NOT NULL,
	"occupation_id" varchar NOT NULL,
	"total_unemployed" int NOT NULL,
	"less_than_five_wks" int NOT NULL,
	"five_to_forteen_wks" int NOT NULL,
	"total_fifteen_wks_and_over" int NOT NULL,
	"fifteen_to_twenty_six_wks" int NOT NULL,
	"twenty_seven_wks_and_over" int NOT NULL,
	"avg_duration_wks" varchar NOT NULL,
	"median_duration_wks" varchar NOT NULL
);

CREATE TABLE "Industry_Unemployment_2018" (
	"year" varchar(4) NOT NULL,
	"occupation_id" varchar NOT NULL,
	"total_unemployed" int NOT NULL,
	"less_than_five_wks" int NOT NULL,
	"five_to_forteen_wks" int NOT NULL,
	"total_fifteen_wks_and_over" int NOT NULL,
	"fifteen_to_twenty_six_wks" int NOT NULL,
	"twenty_seven_wks_and_over" int NOT NULL,
	"avg_duration_wks" varchar NOT NULL,
	"median_duration_wks" varchar NOT NULL
);

CREATE TABLE "Unemployment_by_Race_or_Ethnicity" (
	"date" date NOT NULL,
	"white" float NOT NULL,
	"black" float NOT NULL,
	"asian" float NOT NULL,
	"hispanic" float NOT NULL
);

