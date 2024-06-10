## Рарзаботка
```shell
npm run dev

# Запустить проверку типов. Никак не относится к линтингу.
npm run type-check

# Линтинг не находит и не фиксит проблемы с типами от TS.
npm run lint
```

## Сборка
```shell
# Делает сборку в ./dist
# (run-p type-check build-only)
# run-p - шорткат из npm-run-all2. Запустит указанные за ним процессы. паралельно
npm run build 

# Делает сборку в ./dist
# Делает только сборку
npm run build-only

# Стартует сервер и показывает что было собрано при помощи npm run build
npm run preview
```
