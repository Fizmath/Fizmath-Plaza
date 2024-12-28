FROM golang:1.23.3-alpine AS builder

WORKDIR /fizmath

COPY go.mod  go.sum ./

RUN go mod download

COPY . ./

RUN go build  -v -o backend ./cmd 

FROM scratch

COPY --from=builder /fizmath/backend /fizmath/backend

EXPOSE 8080

CMD ["/fizmath/backend"]