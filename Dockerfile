FROM node:21-bullseye-slim@sha256:b307acadb845540961fa70ac4ca060390f0c33375ad7705943310d25c6f87d32 as build
COPY . .
RUN npm install && npm run build

FROM nginx:1.25.4-bookworm@sha256:6db391d1c0cfb30588ba0bf72ea999404f2764febf0f1f196acd5867ac7efa7e
COPY --from=build ./dist /usr/share/nginx/html