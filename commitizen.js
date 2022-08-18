"use strict";

module.exports = {
	types: [
		{
			value: "feat",
			name: "feat:      Новый функционал",
		},
		{
			value: "refactor",
			name: "refactor:      Рефакторинг",
		},
		{
			value: "fix",
			name: "fix:       Исправление",
		},
		{
			value: "merge",
			name: "merge       Слияние веток",
		},
		{
			value: "hotfix",
			name: "hotfix:      Горячее исправление",
		},
		{
			value: "build",
			name: "build:       Изменение внешних зависимостей",
		},
		{
			value: "docs",
			name: "docs:       Обновление документации",
		},
		{
			value: "revert",
			name: "revert:       Откат к предыдущему коммиту",
		},
		{
			value: "test",
			name: "test:       Написание теста в jest и storybook",
		},
	],
	messages: {
		type: "Какие изменения вы вносите?",
		customScope: "Пропишите область проекта, которую вы изменили (обязательно и на англ):",
		subject: "Напишите КОРОТКОЕ описание коммита: ",
		footer: "Укажите номер таска из ActiveCollab. Например: Task-37204-214",
		confirmCommit: "Вас устраивает получившийся коммит?",
	},
	allowCustomScopes: true,
	allowBreakingChanges: false,
	footerPrefix: "METADATA:",
	subjectLimit: 72,
	skipQuestions: ["body"],
};
