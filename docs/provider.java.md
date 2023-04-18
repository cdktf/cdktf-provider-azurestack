# `provider`

Refer to the Terraform Registory for docs: [`azurestack`](https://www.terraform.io/docs/providers/azurestack).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-azurestack.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzurestackProvider <a name="AzurestackProvider" id="@cdktf/provider-azurestack.provider.AzurestackProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurestack azurestack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.provider.AzurestackProvider;

AzurestackProvider.Builder.create(Construct scope, java.lang.String id)
    .features(AzurestackProviderFeatures)
//  .alias(java.lang.String)
//  .armEndpoint(java.lang.String)
//  .auxiliaryTenantIds(java.util.List<java.lang.String>)
//  .clientCertificatePassword(java.lang.String)
//  .clientCertificatePath(java.lang.String)
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
//  .disableCorrelationRequestId(java.lang.Boolean)
//  .disableCorrelationRequestId(IResolvable)
//  .environment(java.lang.String)
//  .metadataHost(java.lang.String)
//  .msiEndpoint(java.lang.String)
//  .skipProviderRegistration(java.lang.Boolean)
//  .skipProviderRegistration(IResolvable)
//  .subscriptionId(java.lang.String)
//  .tenantId(java.lang.String)
//  .useMsi(java.lang.Boolean)
//  .useMsi(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.features">features</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a></code> | features block. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.armEndpoint">armEndpoint</a></code> | <code>java.lang.String</code> | The Hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.auxiliaryTenantIds">auxiliaryTenantIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#auxiliary_tenant_ids AzurestackProvider#auxiliary_tenant_ids}. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.clientCertificatePassword">clientCertificatePassword</a></code> | <code>java.lang.String</code> | The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.clientCertificatePath">clientCertificatePath</a></code> | <code>java.lang.String</code> | The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | The Client ID which should be used. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.disableCorrelationRequestId">disableCorrelationRequestId</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This will disable the x-ms-correlation-request-id header. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.environment">environment</a></code> | <code>java.lang.String</code> | The Cloud Environment which should be used. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.metadataHost">metadataHost</a></code> | <code>java.lang.String</code> | The Hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.msiEndpoint">msiEndpoint</a></code> | <code>java.lang.String</code> | The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.skipProviderRegistration">skipProviderRegistration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should the AzureStack Provider skip registering all of the Resource Providers that it supports, if they're not already registered? |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | The Subscription ID which should be used. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | The Tenant ID which should be used. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.useMsi">useMsi</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allowed Managed Service Identity be used for Authentication. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.features"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a>

features block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#features AzurestackProvider#features}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#alias AzurestackProvider#alias}

---

##### `armEndpoint`<sup>Optional</sup> <a name="armEndpoint" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.armEndpoint"></a>

- *Type:* java.lang.String

The Hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#arm_endpoint AzurestackProvider#arm_endpoint}

---

##### `auxiliaryTenantIds`<sup>Optional</sup> <a name="auxiliaryTenantIds" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.auxiliaryTenantIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#auxiliary_tenant_ids AzurestackProvider#auxiliary_tenant_ids}.

---

##### `clientCertificatePassword`<sup>Optional</sup> <a name="clientCertificatePassword" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.clientCertificatePassword"></a>

- *Type:* java.lang.String

The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#client_certificate_password AzurestackProvider#client_certificate_password}

---

##### `clientCertificatePath`<sup>Optional</sup> <a name="clientCertificatePath" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.clientCertificatePath"></a>

- *Type:* java.lang.String

The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#client_certificate_path AzurestackProvider#client_certificate_path}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

The Client ID which should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#client_id AzurestackProvider#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.clientSecret"></a>

- *Type:* java.lang.String

The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#client_secret AzurestackProvider#client_secret}

---

##### `disableCorrelationRequestId`<sup>Optional</sup> <a name="disableCorrelationRequestId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.disableCorrelationRequestId"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This will disable the x-ms-correlation-request-id header.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#disable_correlation_request_id AzurestackProvider#disable_correlation_request_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.environment"></a>

- *Type:* java.lang.String

The Cloud Environment which should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#environment AzurestackProvider#environment}

---

##### `metadataHost`<sup>Optional</sup> <a name="metadataHost" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.metadataHost"></a>

- *Type:* java.lang.String

The Hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#metadata_host AzurestackProvider#metadata_host}

---

##### `msiEndpoint`<sup>Optional</sup> <a name="msiEndpoint" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.msiEndpoint"></a>

- *Type:* java.lang.String

The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#msi_endpoint AzurestackProvider#msi_endpoint}

---

##### `skipProviderRegistration`<sup>Optional</sup> <a name="skipProviderRegistration" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.skipProviderRegistration"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should the AzureStack Provider skip registering all of the Resource Providers that it supports, if they're not already registered?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#skip_provider_registration AzurestackProvider#skip_provider_registration}

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.subscriptionId"></a>

- *Type:* java.lang.String

The Subscription ID which should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#subscription_id AzurestackProvider#subscription_id}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

The Tenant ID which should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#tenant_id AzurestackProvider#tenant_id}

---

##### `useMsi`<sup>Optional</sup> <a name="useMsi" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.useMsi"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allowed Managed Service Identity be used for Authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#use_msi AzurestackProvider#use_msi}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetArmEndpoint">resetArmEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetAuxiliaryTenantIds">resetAuxiliaryTenantIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientCertificatePassword">resetClientCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientCertificatePath">resetClientCertificatePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetDisableCorrelationRequestId">resetDisableCorrelationRequestId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetMetadataHost">resetMetadataHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetMsiEndpoint">resetMsiEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetSkipProviderRegistration">resetSkipProviderRegistration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetUseMsi">resetUseMsi</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.provider.AzurestackProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurestack.provider.AzurestackProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.provider.AzurestackProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.provider.AzurestackProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurestack.provider.AzurestackProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurestack.provider.AzurestackProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetArmEndpoint` <a name="resetArmEndpoint" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetArmEndpoint"></a>

```java
public void resetArmEndpoint()
```

##### `resetAuxiliaryTenantIds` <a name="resetAuxiliaryTenantIds" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetAuxiliaryTenantIds"></a>

```java
public void resetAuxiliaryTenantIds()
```

##### `resetClientCertificatePassword` <a name="resetClientCertificatePassword" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientCertificatePassword"></a>

```java
public void resetClientCertificatePassword()
```

##### `resetClientCertificatePath` <a name="resetClientCertificatePath" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientCertificatePath"></a>

```java
public void resetClientCertificatePath()
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetDisableCorrelationRequestId` <a name="resetDisableCorrelationRequestId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetDisableCorrelationRequestId"></a>

```java
public void resetDisableCorrelationRequestId()
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetMetadataHost` <a name="resetMetadataHost" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetMetadataHost"></a>

```java
public void resetMetadataHost()
```

##### `resetMsiEndpoint` <a name="resetMsiEndpoint" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetMsiEndpoint"></a>

```java
public void resetMsiEndpoint()
```

##### `resetSkipProviderRegistration` <a name="resetSkipProviderRegistration" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetSkipProviderRegistration"></a>

```java
public void resetSkipProviderRegistration()
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetSubscriptionId"></a>

```java
public void resetSubscriptionId()
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetTenantId"></a>

```java
public void resetTenantId()
```

##### `resetUseMsi` <a name="resetUseMsi" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetUseMsi"></a>

```java
public void resetUseMsi()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurestack.provider.AzurestackProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.provider.AzurestackProvider;

AzurestackProvider.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.provider.AzurestackProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurestack.provider.AzurestackProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.provider.AzurestackProvider;

AzurestackProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.provider.AzurestackProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-azurestack.provider.AzurestackProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.provider.AzurestackProvider;

AzurestackProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.provider.AzurestackProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.armEndpointInput">armEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.auxiliaryTenantIdsInput">auxiliaryTenantIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePasswordInput">clientCertificatePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePathInput">clientCertificatePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.disableCorrelationRequestIdInput">disableCorrelationRequestIdInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.featuresInput">featuresInput</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.metadataHostInput">metadataHostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.msiEndpointInput">msiEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.skipProviderRegistrationInput">skipProviderRegistrationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.useMsiInput">useMsiInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.armEndpoint">armEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.auxiliaryTenantIds">auxiliaryTenantIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePassword">clientCertificatePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePath">clientCertificatePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.disableCorrelationRequestId">disableCorrelationRequestId</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.features">features</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.metadataHost">metadataHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.msiEndpoint">msiEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.skipProviderRegistration">skipProviderRegistration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.useMsi">useMsi</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `armEndpointInput`<sup>Optional</sup> <a name="armEndpointInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.armEndpointInput"></a>

```java
public java.lang.String getArmEndpointInput();
```

- *Type:* java.lang.String

---

##### `auxiliaryTenantIdsInput`<sup>Optional</sup> <a name="auxiliaryTenantIdsInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.auxiliaryTenantIdsInput"></a>

```java
public java.util.List<java.lang.String> getAuxiliaryTenantIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientCertificatePasswordInput`<sup>Optional</sup> <a name="clientCertificatePasswordInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePasswordInput"></a>

```java
public java.lang.String getClientCertificatePasswordInput();
```

- *Type:* java.lang.String

---

##### `clientCertificatePathInput`<sup>Optional</sup> <a name="clientCertificatePathInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePathInput"></a>

```java
public java.lang.String getClientCertificatePathInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `disableCorrelationRequestIdInput`<sup>Optional</sup> <a name="disableCorrelationRequestIdInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.disableCorrelationRequestIdInput"></a>

```java
public java.lang.Object getDisableCorrelationRequestIdInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `featuresInput`<sup>Optional</sup> <a name="featuresInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.featuresInput"></a>

```java
public AzurestackProviderFeatures getFeaturesInput();
```

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a>

---

##### `metadataHostInput`<sup>Optional</sup> <a name="metadataHostInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.metadataHostInput"></a>

```java
public java.lang.String getMetadataHostInput();
```

- *Type:* java.lang.String

---

##### `msiEndpointInput`<sup>Optional</sup> <a name="msiEndpointInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.msiEndpointInput"></a>

```java
public java.lang.String getMsiEndpointInput();
```

- *Type:* java.lang.String

---

##### `skipProviderRegistrationInput`<sup>Optional</sup> <a name="skipProviderRegistrationInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.skipProviderRegistrationInput"></a>

```java
public java.lang.Object getSkipProviderRegistrationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.subscriptionIdInput"></a>

```java
public java.lang.String getSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `useMsiInput`<sup>Optional</sup> <a name="useMsiInput" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.useMsiInput"></a>

```java
public java.lang.Object getUseMsiInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `armEndpoint`<sup>Optional</sup> <a name="armEndpoint" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.armEndpoint"></a>

```java
public java.lang.String getArmEndpoint();
```

- *Type:* java.lang.String

---

##### `auxiliaryTenantIds`<sup>Optional</sup> <a name="auxiliaryTenantIds" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.auxiliaryTenantIds"></a>

```java
public java.util.List<java.lang.String> getAuxiliaryTenantIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientCertificatePassword`<sup>Optional</sup> <a name="clientCertificatePassword" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePassword"></a>

```java
public java.lang.String getClientCertificatePassword();
```

- *Type:* java.lang.String

---

##### `clientCertificatePath`<sup>Optional</sup> <a name="clientCertificatePath" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePath"></a>

```java
public java.lang.String getClientCertificatePath();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `disableCorrelationRequestId`<sup>Optional</sup> <a name="disableCorrelationRequestId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.disableCorrelationRequestId"></a>

```java
public java.lang.Object getDisableCorrelationRequestId();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.features"></a>

```java
public AzurestackProviderFeatures getFeatures();
```

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a>

---

##### `metadataHost`<sup>Optional</sup> <a name="metadataHost" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.metadataHost"></a>

```java
public java.lang.String getMetadataHost();
```

- *Type:* java.lang.String

---

##### `msiEndpoint`<sup>Optional</sup> <a name="msiEndpoint" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.msiEndpoint"></a>

```java
public java.lang.String getMsiEndpoint();
```

- *Type:* java.lang.String

---

##### `skipProviderRegistration`<sup>Optional</sup> <a name="skipProviderRegistration" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.skipProviderRegistration"></a>

```java
public java.lang.Object getSkipProviderRegistration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `useMsi`<sup>Optional</sup> <a name="useMsi" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.useMsi"></a>

```java
public java.lang.Object getUseMsi();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AzurestackProviderConfig <a name="AzurestackProviderConfig" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.provider.AzurestackProviderConfig;

AzurestackProviderConfig.builder()
    .features(AzurestackProviderFeatures)
//  .alias(java.lang.String)
//  .armEndpoint(java.lang.String)
//  .auxiliaryTenantIds(java.util.List<java.lang.String>)
//  .clientCertificatePassword(java.lang.String)
//  .clientCertificatePath(java.lang.String)
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
//  .disableCorrelationRequestId(java.lang.Boolean)
//  .disableCorrelationRequestId(IResolvable)
//  .environment(java.lang.String)
//  .metadataHost(java.lang.String)
//  .msiEndpoint(java.lang.String)
//  .skipProviderRegistration(java.lang.Boolean)
//  .skipProviderRegistration(IResolvable)
//  .subscriptionId(java.lang.String)
//  .tenantId(java.lang.String)
//  .useMsi(java.lang.Boolean)
//  .useMsi(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.features">features</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a></code> | features block. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.armEndpoint">armEndpoint</a></code> | <code>java.lang.String</code> | The Hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.auxiliaryTenantIds">auxiliaryTenantIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#auxiliary_tenant_ids AzurestackProvider#auxiliary_tenant_ids}. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientCertificatePassword">clientCertificatePassword</a></code> | <code>java.lang.String</code> | The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientCertificatePath">clientCertificatePath</a></code> | <code>java.lang.String</code> | The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The Client ID which should be used. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.disableCorrelationRequestId">disableCorrelationRequestId</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This will disable the x-ms-correlation-request-id header. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.environment">environment</a></code> | <code>java.lang.String</code> | The Cloud Environment which should be used. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.metadataHost">metadataHost</a></code> | <code>java.lang.String</code> | The Hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.msiEndpoint">msiEndpoint</a></code> | <code>java.lang.String</code> | The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.skipProviderRegistration">skipProviderRegistration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should the AzureStack Provider skip registering all of the Resource Providers that it supports, if they're not already registered? |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | The Subscription ID which should be used. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | The Tenant ID which should be used. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.useMsi">useMsi</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allowed Managed Service Identity be used for Authentication. |

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.features"></a>

```java
public AzurestackProviderFeatures getFeatures();
```

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a>

features block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#features AzurestackProvider#features}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#alias AzurestackProvider#alias}

---

##### `armEndpoint`<sup>Optional</sup> <a name="armEndpoint" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.armEndpoint"></a>

```java
public java.lang.String getArmEndpoint();
```

- *Type:* java.lang.String

The Hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#arm_endpoint AzurestackProvider#arm_endpoint}

---

##### `auxiliaryTenantIds`<sup>Optional</sup> <a name="auxiliaryTenantIds" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.auxiliaryTenantIds"></a>

```java
public java.util.List<java.lang.String> getAuxiliaryTenantIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#auxiliary_tenant_ids AzurestackProvider#auxiliary_tenant_ids}.

---

##### `clientCertificatePassword`<sup>Optional</sup> <a name="clientCertificatePassword" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientCertificatePassword"></a>

```java
public java.lang.String getClientCertificatePassword();
```

- *Type:* java.lang.String

The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#client_certificate_password AzurestackProvider#client_certificate_password}

---

##### `clientCertificatePath`<sup>Optional</sup> <a name="clientCertificatePath" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientCertificatePath"></a>

```java
public java.lang.String getClientCertificatePath();
```

- *Type:* java.lang.String

The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#client_certificate_path AzurestackProvider#client_certificate_path}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The Client ID which should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#client_id AzurestackProvider#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#client_secret AzurestackProvider#client_secret}

---

##### `disableCorrelationRequestId`<sup>Optional</sup> <a name="disableCorrelationRequestId" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.disableCorrelationRequestId"></a>

```java
public java.lang.Object getDisableCorrelationRequestId();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This will disable the x-ms-correlation-request-id header.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#disable_correlation_request_id AzurestackProvider#disable_correlation_request_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

The Cloud Environment which should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#environment AzurestackProvider#environment}

---

##### `metadataHost`<sup>Optional</sup> <a name="metadataHost" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.metadataHost"></a>

```java
public java.lang.String getMetadataHost();
```

- *Type:* java.lang.String

The Hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#metadata_host AzurestackProvider#metadata_host}

---

##### `msiEndpoint`<sup>Optional</sup> <a name="msiEndpoint" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.msiEndpoint"></a>

```java
public java.lang.String getMsiEndpoint();
```

- *Type:* java.lang.String

The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#msi_endpoint AzurestackProvider#msi_endpoint}

---

##### `skipProviderRegistration`<sup>Optional</sup> <a name="skipProviderRegistration" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.skipProviderRegistration"></a>

```java
public java.lang.Object getSkipProviderRegistration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should the AzureStack Provider skip registering all of the Resource Providers that it supports, if they're not already registered?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#skip_provider_registration AzurestackProvider#skip_provider_registration}

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

The Subscription ID which should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#subscription_id AzurestackProvider#subscription_id}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

The Tenant ID which should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#tenant_id AzurestackProvider#tenant_id}

---

##### `useMsi`<sup>Optional</sup> <a name="useMsi" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.useMsi"></a>

```java
public java.lang.Object getUseMsi();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allowed Managed Service Identity be used for Authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#use_msi AzurestackProvider#use_msi}

---

### AzurestackProviderFeatures <a name="AzurestackProviderFeatures" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.provider.AzurestackProviderFeatures;

AzurestackProviderFeatures.builder()
//  .resourceGroup(AzurestackProviderFeaturesResourceGroup)
//  .virtualMachine(AzurestackProviderFeaturesVirtualMachine)
//  .virtualMachineScaleSet(AzurestackProviderFeaturesVirtualMachineScaleSet)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.property.resourceGroup">resourceGroup</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesResourceGroup">AzurestackProviderFeaturesResourceGroup</a></code> | resource_group block. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.property.virtualMachine">virtualMachine</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine">AzurestackProviderFeaturesVirtualMachine</a></code> | virtual_machine block. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.property.virtualMachineScaleSet">virtualMachineScaleSet</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet">AzurestackProviderFeaturesVirtualMachineScaleSet</a></code> | virtual_machine_scale_set block. |

---

##### `resourceGroup`<sup>Optional</sup> <a name="resourceGroup" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.property.resourceGroup"></a>

```java
public AzurestackProviderFeaturesResourceGroup getResourceGroup();
```

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesResourceGroup">AzurestackProviderFeaturesResourceGroup</a>

resource_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#resource_group AzurestackProvider#resource_group}

---

##### `virtualMachine`<sup>Optional</sup> <a name="virtualMachine" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.property.virtualMachine"></a>

```java
public AzurestackProviderFeaturesVirtualMachine getVirtualMachine();
```

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine">AzurestackProviderFeaturesVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#virtual_machine AzurestackProvider#virtual_machine}

---

##### `virtualMachineScaleSet`<sup>Optional</sup> <a name="virtualMachineScaleSet" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.property.virtualMachineScaleSet"></a>

```java
public AzurestackProviderFeaturesVirtualMachineScaleSet getVirtualMachineScaleSet();
```

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet">AzurestackProviderFeaturesVirtualMachineScaleSet</a>

virtual_machine_scale_set block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#virtual_machine_scale_set AzurestackProvider#virtual_machine_scale_set}

---

### AzurestackProviderFeaturesResourceGroup <a name="AzurestackProviderFeaturesResourceGroup" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesResourceGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesResourceGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.provider.AzurestackProviderFeaturesResourceGroup;

AzurestackProviderFeaturesResourceGroup.builder()
//  .preventDeletionIfContainsResources(java.lang.Boolean)
//  .preventDeletionIfContainsResources(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesResourceGroup.property.preventDeletionIfContainsResources">preventDeletionIfContainsResources</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#prevent_deletion_if_contains_resources AzurestackProvider#prevent_deletion_if_contains_resources}. |

---

##### `preventDeletionIfContainsResources`<sup>Optional</sup> <a name="preventDeletionIfContainsResources" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesResourceGroup.property.preventDeletionIfContainsResources"></a>

```java
public java.lang.Object getPreventDeletionIfContainsResources();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#prevent_deletion_if_contains_resources AzurestackProvider#prevent_deletion_if_contains_resources}.

---

### AzurestackProviderFeaturesVirtualMachine <a name="AzurestackProviderFeaturesVirtualMachine" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.provider.AzurestackProviderFeaturesVirtualMachine;

AzurestackProviderFeaturesVirtualMachine.builder()
//  .deleteOsDiskOnDeletion(java.lang.Boolean)
//  .deleteOsDiskOnDeletion(IResolvable)
//  .gracefulShutdown(java.lang.Boolean)
//  .gracefulShutdown(IResolvable)
//  .skipShutdownAndForceDelete(java.lang.Boolean)
//  .skipShutdownAndForceDelete(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.property.deleteOsDiskOnDeletion">deleteOsDiskOnDeletion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#delete_os_disk_on_deletion AzurestackProvider#delete_os_disk_on_deletion}. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.property.gracefulShutdown">gracefulShutdown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#graceful_shutdown AzurestackProvider#graceful_shutdown}. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.property.skipShutdownAndForceDelete">skipShutdownAndForceDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#skip_shutdown_and_force_delete AzurestackProvider#skip_shutdown_and_force_delete}. |

---

##### `deleteOsDiskOnDeletion`<sup>Optional</sup> <a name="deleteOsDiskOnDeletion" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.property.deleteOsDiskOnDeletion"></a>

```java
public java.lang.Object getDeleteOsDiskOnDeletion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#delete_os_disk_on_deletion AzurestackProvider#delete_os_disk_on_deletion}.

---

##### `gracefulShutdown`<sup>Optional</sup> <a name="gracefulShutdown" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.property.gracefulShutdown"></a>

```java
public java.lang.Object getGracefulShutdown();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#graceful_shutdown AzurestackProvider#graceful_shutdown}.

---

##### `skipShutdownAndForceDelete`<sup>Optional</sup> <a name="skipShutdownAndForceDelete" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.property.skipShutdownAndForceDelete"></a>

```java
public java.lang.Object getSkipShutdownAndForceDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#skip_shutdown_and_force_delete AzurestackProvider#skip_shutdown_and_force_delete}.

---

### AzurestackProviderFeaturesVirtualMachineScaleSet <a name="AzurestackProviderFeaturesVirtualMachineScaleSet" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet;

AzurestackProviderFeaturesVirtualMachineScaleSet.builder()
    .rollInstancesWhenRequired(java.lang.Boolean)
    .rollInstancesWhenRequired(IResolvable)
//  .forceDelete(java.lang.Boolean)
//  .forceDelete(IResolvable)
//  .scaleToZeroBeforeDeletion(java.lang.Boolean)
//  .scaleToZeroBeforeDeletion(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.property.rollInstancesWhenRequired">rollInstancesWhenRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#roll_instances_when_required AzurestackProvider#roll_instances_when_required}. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.property.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#force_delete AzurestackProvider#force_delete}. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.property.scaleToZeroBeforeDeletion">scaleToZeroBeforeDeletion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#scale_to_zero_before_deletion AzurestackProvider#scale_to_zero_before_deletion}. |

---

##### `rollInstancesWhenRequired`<sup>Required</sup> <a name="rollInstancesWhenRequired" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.property.rollInstancesWhenRequired"></a>

```java
public java.lang.Object getRollInstancesWhenRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#roll_instances_when_required AzurestackProvider#roll_instances_when_required}.

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.property.forceDelete"></a>

```java
public java.lang.Object getForceDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#force_delete AzurestackProvider#force_delete}.

---

##### `scaleToZeroBeforeDeletion`<sup>Optional</sup> <a name="scaleToZeroBeforeDeletion" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.property.scaleToZeroBeforeDeletion"></a>

```java
public java.lang.Object getScaleToZeroBeforeDeletion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack#scale_to_zero_before_deletion AzurestackProvider#scale_to_zero_before_deletion}.

---



