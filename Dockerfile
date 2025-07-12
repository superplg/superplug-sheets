FROM golang:1.24 as builder
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o /bin/asset-service

FROM alpine:3
RUN apk add --no-cache ca-certificates
COPY --from=builder /bin/asset-service asset-service
COPY public public
CMD ["/asset-service"]