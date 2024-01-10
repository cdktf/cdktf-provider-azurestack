# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-azurestack.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzurestackProvider <a name="AzurestackProvider" id="@cdktf/provider-azurestack.provider.AzurestackProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs azurestack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import provider

provider.AzurestackProvider(
  scope: Construct,
  id: str,
  features: AzurestackProviderFeatures,
  alias: str = None,
  arm_endpoint: str = None,
  auxiliary_tenant_ids: typing.List[str] = None,
  client_certificate_password: str = None,
  client_certificate_path: str = None,
  client_id: str = None,
  client_secret: str = None,
  disable_correlation_request_id: typing.Union[bool, IResolvable] = None,
  environment: str = None,
  metadata_host: str = None,
  msi_endpoint: str = None,
  skip_provider_registration: typing.Union[bool, IResolvable] = None,
  subscription_id: str = None,
  tenant_id: str = None,
  use_msi: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.features">features</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a></code> | features block. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.armEndpoint">arm_endpoint</a></code> | <code>str</code> | The Hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.auxiliaryTenantIds">auxiliary_tenant_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#auxiliary_tenant_ids AzurestackProvider#auxiliary_tenant_ids}. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.clientCertificatePassword">client_certificate_password</a></code> | <code>str</code> | The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.clientCertificatePath">client_certificate_path</a></code> | <code>str</code> | The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | The Client ID which should be used. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.clientSecret">client_secret</a></code> | <code>str</code> | The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.disableCorrelationRequestId">disable_correlation_request_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This will disable the x-ms-correlation-request-id header. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.environment">environment</a></code> | <code>str</code> | The Cloud Environment which should be used. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.metadataHost">metadata_host</a></code> | <code>str</code> | The Hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.msiEndpoint">msi_endpoint</a></code> | <code>str</code> | The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.skipProviderRegistration">skip_provider_registration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should the AzureStack Provider skip registering all of the Resource Providers that it supports, if they're not already registered? |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | The Subscription ID which should be used. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | The Tenant ID which should be used. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.useMsi">use_msi</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allowed Managed Service Identity be used for Authentication. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.features"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a>

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#features AzurestackProvider#features}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#alias AzurestackProvider#alias}

---

##### `arm_endpoint`<sup>Optional</sup> <a name="arm_endpoint" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.armEndpoint"></a>

- *Type:* str

The Hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#arm_endpoint AzurestackProvider#arm_endpoint}

---

##### `auxiliary_tenant_ids`<sup>Optional</sup> <a name="auxiliary_tenant_ids" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.auxiliaryTenantIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#auxiliary_tenant_ids AzurestackProvider#auxiliary_tenant_ids}.

---

##### `client_certificate_password`<sup>Optional</sup> <a name="client_certificate_password" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.clientCertificatePassword"></a>

- *Type:* str

The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#client_certificate_password AzurestackProvider#client_certificate_password}

---

##### `client_certificate_path`<sup>Optional</sup> <a name="client_certificate_path" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.clientCertificatePath"></a>

- *Type:* str

The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#client_certificate_path AzurestackProvider#client_certificate_path}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.clientId"></a>

- *Type:* str

The Client ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#client_id AzurestackProvider#client_id}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.clientSecret"></a>

- *Type:* str

The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#client_secret AzurestackProvider#client_secret}

---

##### `disable_correlation_request_id`<sup>Optional</sup> <a name="disable_correlation_request_id" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.disableCorrelationRequestId"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

This will disable the x-ms-correlation-request-id header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#disable_correlation_request_id AzurestackProvider#disable_correlation_request_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.environment"></a>

- *Type:* str

The Cloud Environment which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#environment AzurestackProvider#environment}

---

##### `metadata_host`<sup>Optional</sup> <a name="metadata_host" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.metadataHost"></a>

- *Type:* str

The Hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#metadata_host AzurestackProvider#metadata_host}

---

##### `msi_endpoint`<sup>Optional</sup> <a name="msi_endpoint" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.msiEndpoint"></a>

- *Type:* str

The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#msi_endpoint AzurestackProvider#msi_endpoint}

---

##### `skip_provider_registration`<sup>Optional</sup> <a name="skip_provider_registration" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.skipProviderRegistration"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the AzureStack Provider skip registering all of the Resource Providers that it supports, if they're not already registered?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#skip_provider_registration AzurestackProvider#skip_provider_registration}

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.subscriptionId"></a>

- *Type:* str

The Subscription ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#subscription_id AzurestackProvider#subscription_id}

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.tenantId"></a>

- *Type:* str

The Tenant ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#tenant_id AzurestackProvider#tenant_id}

---

##### `use_msi`<sup>Optional</sup> <a name="use_msi" id="@cdktf/provider-azurestack.provider.AzurestackProvider.Initializer.parameter.useMsi"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allowed Managed Service Identity be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#use_msi AzurestackProvider#use_msi}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetArmEndpoint">reset_arm_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetAuxiliaryTenantIds">reset_auxiliary_tenant_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientCertificatePassword">reset_client_certificate_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientCertificatePath">reset_client_certificate_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetDisableCorrelationRequestId">reset_disable_correlation_request_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetMetadataHost">reset_metadata_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetMsiEndpoint">reset_msi_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetSkipProviderRegistration">reset_skip_provider_registration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetSubscriptionId">reset_subscription_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetTenantId">reset_tenant_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.resetUseMsi">reset_use_msi</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.provider.AzurestackProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurestack.provider.AzurestackProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.provider.AzurestackProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.provider.AzurestackProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurestack.provider.AzurestackProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurestack.provider.AzurestackProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurestack.provider.AzurestackProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurestack.provider.AzurestackProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurestack.provider.AzurestackProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_arm_endpoint` <a name="reset_arm_endpoint" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetArmEndpoint"></a>

```python
def reset_arm_endpoint() -> None
```

##### `reset_auxiliary_tenant_ids` <a name="reset_auxiliary_tenant_ids" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetAuxiliaryTenantIds"></a>

```python
def reset_auxiliary_tenant_ids() -> None
```

##### `reset_client_certificate_password` <a name="reset_client_certificate_password" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientCertificatePassword"></a>

```python
def reset_client_certificate_password() -> None
```

##### `reset_client_certificate_path` <a name="reset_client_certificate_path" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientCertificatePath"></a>

```python
def reset_client_certificate_path() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_disable_correlation_request_id` <a name="reset_disable_correlation_request_id" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetDisableCorrelationRequestId"></a>

```python
def reset_disable_correlation_request_id() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_metadata_host` <a name="reset_metadata_host" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetMetadataHost"></a>

```python
def reset_metadata_host() -> None
```

##### `reset_msi_endpoint` <a name="reset_msi_endpoint" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetMsiEndpoint"></a>

```python
def reset_msi_endpoint() -> None
```

##### `reset_skip_provider_registration` <a name="reset_skip_provider_registration" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetSkipProviderRegistration"></a>

```python
def reset_skip_provider_registration() -> None
```

##### `reset_subscription_id` <a name="reset_subscription_id" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetSubscriptionId"></a>

```python
def reset_subscription_id() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

##### `reset_use_msi` <a name="reset_use_msi" id="@cdktf/provider-azurestack.provider.AzurestackProvider.resetUseMsi"></a>

```python
def reset_use_msi() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AzurestackProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurestack.provider.AzurestackProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurestack import provider

provider.AzurestackProvider.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurestack.provider.AzurestackProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurestack import provider

provider.AzurestackProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.provider.AzurestackProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-azurestack.provider.AzurestackProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_azurestack import provider

provider.AzurestackProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.provider.AzurestackProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurestack.provider.AzurestackProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurestack import provider

provider.AzurestackProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AzurestackProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.provider.AzurestackProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurestack.provider.AzurestackProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AzurestackProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurestack.provider.AzurestackProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AzurestackProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.provider.AzurestackProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AzurestackProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.armEndpointInput">arm_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.auxiliaryTenantIdsInput">auxiliary_tenant_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePasswordInput">client_certificate_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePathInput">client_certificate_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.disableCorrelationRequestIdInput">disable_correlation_request_id_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.featuresInput">features_input</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.metadataHostInput">metadata_host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.msiEndpointInput">msi_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.skipProviderRegistrationInput">skip_provider_registration_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.useMsiInput">use_msi_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.armEndpoint">arm_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.auxiliaryTenantIds">auxiliary_tenant_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePassword">client_certificate_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePath">client_certificate_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.disableCorrelationRequestId">disable_correlation_request_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.features">features</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.metadataHost">metadata_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.msiEndpoint">msi_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.skipProviderRegistration">skip_provider_registration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.useMsi">use_msi</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `arm_endpoint_input`<sup>Optional</sup> <a name="arm_endpoint_input" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.armEndpointInput"></a>

```python
arm_endpoint_input: str
```

- *Type:* str

---

##### `auxiliary_tenant_ids_input`<sup>Optional</sup> <a name="auxiliary_tenant_ids_input" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.auxiliaryTenantIdsInput"></a>

```python
auxiliary_tenant_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_certificate_password_input`<sup>Optional</sup> <a name="client_certificate_password_input" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePasswordInput"></a>

```python
client_certificate_password_input: str
```

- *Type:* str

---

##### `client_certificate_path_input`<sup>Optional</sup> <a name="client_certificate_path_input" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePathInput"></a>

```python
client_certificate_path_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `disable_correlation_request_id_input`<sup>Optional</sup> <a name="disable_correlation_request_id_input" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.disableCorrelationRequestIdInput"></a>

```python
disable_correlation_request_id_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `features_input`<sup>Optional</sup> <a name="features_input" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.featuresInput"></a>

```python
features_input: AzurestackProviderFeatures
```

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a>

---

##### `metadata_host_input`<sup>Optional</sup> <a name="metadata_host_input" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.metadataHostInput"></a>

```python
metadata_host_input: str
```

- *Type:* str

---

##### `msi_endpoint_input`<sup>Optional</sup> <a name="msi_endpoint_input" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.msiEndpointInput"></a>

```python
msi_endpoint_input: str
```

- *Type:* str

---

##### `skip_provider_registration_input`<sup>Optional</sup> <a name="skip_provider_registration_input" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.skipProviderRegistrationInput"></a>

```python
skip_provider_registration_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `use_msi_input`<sup>Optional</sup> <a name="use_msi_input" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.useMsiInput"></a>

```python
use_msi_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `arm_endpoint`<sup>Optional</sup> <a name="arm_endpoint" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.armEndpoint"></a>

```python
arm_endpoint: str
```

- *Type:* str

---

##### `auxiliary_tenant_ids`<sup>Optional</sup> <a name="auxiliary_tenant_ids" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.auxiliaryTenantIds"></a>

```python
auxiliary_tenant_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_certificate_password`<sup>Optional</sup> <a name="client_certificate_password" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePassword"></a>

```python
client_certificate_password: str
```

- *Type:* str

---

##### `client_certificate_path`<sup>Optional</sup> <a name="client_certificate_path" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientCertificatePath"></a>

```python
client_certificate_path: str
```

- *Type:* str

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `disable_correlation_request_id`<sup>Optional</sup> <a name="disable_correlation_request_id" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.disableCorrelationRequestId"></a>

```python
disable_correlation_request_id: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.features"></a>

```python
features: AzurestackProviderFeatures
```

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a>

---

##### `metadata_host`<sup>Optional</sup> <a name="metadata_host" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.metadataHost"></a>

```python
metadata_host: str
```

- *Type:* str

---

##### `msi_endpoint`<sup>Optional</sup> <a name="msi_endpoint" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.msiEndpoint"></a>

```python
msi_endpoint: str
```

- *Type:* str

---

##### `skip_provider_registration`<sup>Optional</sup> <a name="skip_provider_registration" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.skipProviderRegistration"></a>

```python
skip_provider_registration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `use_msi`<sup>Optional</sup> <a name="use_msi" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.useMsi"></a>

```python
use_msi: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurestack.provider.AzurestackProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AzurestackProviderConfig <a name="AzurestackProviderConfig" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import provider

provider.AzurestackProviderConfig(
  features: AzurestackProviderFeatures,
  alias: str = None,
  arm_endpoint: str = None,
  auxiliary_tenant_ids: typing.List[str] = None,
  client_certificate_password: str = None,
  client_certificate_path: str = None,
  client_id: str = None,
  client_secret: str = None,
  disable_correlation_request_id: typing.Union[bool, IResolvable] = None,
  environment: str = None,
  metadata_host: str = None,
  msi_endpoint: str = None,
  skip_provider_registration: typing.Union[bool, IResolvable] = None,
  subscription_id: str = None,
  tenant_id: str = None,
  use_msi: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.features">features</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a></code> | features block. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.armEndpoint">arm_endpoint</a></code> | <code>str</code> | The Hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.auxiliaryTenantIds">auxiliary_tenant_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#auxiliary_tenant_ids AzurestackProvider#auxiliary_tenant_ids}. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientCertificatePassword">client_certificate_password</a></code> | <code>str</code> | The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientCertificatePath">client_certificate_path</a></code> | <code>str</code> | The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientId">client_id</a></code> | <code>str</code> | The Client ID which should be used. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.disableCorrelationRequestId">disable_correlation_request_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This will disable the x-ms-correlation-request-id header. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.environment">environment</a></code> | <code>str</code> | The Cloud Environment which should be used. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.metadataHost">metadata_host</a></code> | <code>str</code> | The Hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.msiEndpoint">msi_endpoint</a></code> | <code>str</code> | The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.skipProviderRegistration">skip_provider_registration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should the AzureStack Provider skip registering all of the Resource Providers that it supports, if they're not already registered? |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | The Subscription ID which should be used. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.tenantId">tenant_id</a></code> | <code>str</code> | The Tenant ID which should be used. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.useMsi">use_msi</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allowed Managed Service Identity be used for Authentication. |

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.features"></a>

```python
features: AzurestackProviderFeatures
```

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures">AzurestackProviderFeatures</a>

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#features AzurestackProvider#features}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#alias AzurestackProvider#alias}

---

##### `arm_endpoint`<sup>Optional</sup> <a name="arm_endpoint" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.armEndpoint"></a>

```python
arm_endpoint: str
```

- *Type:* str

The Hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#arm_endpoint AzurestackProvider#arm_endpoint}

---

##### `auxiliary_tenant_ids`<sup>Optional</sup> <a name="auxiliary_tenant_ids" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.auxiliaryTenantIds"></a>

```python
auxiliary_tenant_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#auxiliary_tenant_ids AzurestackProvider#auxiliary_tenant_ids}.

---

##### `client_certificate_password`<sup>Optional</sup> <a name="client_certificate_password" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientCertificatePassword"></a>

```python
client_certificate_password: str
```

- *Type:* str

The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#client_certificate_password AzurestackProvider#client_certificate_password}

---

##### `client_certificate_path`<sup>Optional</sup> <a name="client_certificate_path" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientCertificatePath"></a>

```python
client_certificate_path: str
```

- *Type:* str

The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#client_certificate_path AzurestackProvider#client_certificate_path}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The Client ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#client_id AzurestackProvider#client_id}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#client_secret AzurestackProvider#client_secret}

---

##### `disable_correlation_request_id`<sup>Optional</sup> <a name="disable_correlation_request_id" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.disableCorrelationRequestId"></a>

```python
disable_correlation_request_id: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

This will disable the x-ms-correlation-request-id header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#disable_correlation_request_id AzurestackProvider#disable_correlation_request_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.environment"></a>

```python
environment: str
```

- *Type:* str

The Cloud Environment which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#environment AzurestackProvider#environment}

---

##### `metadata_host`<sup>Optional</sup> <a name="metadata_host" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.metadataHost"></a>

```python
metadata_host: str
```

- *Type:* str

The Hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#metadata_host AzurestackProvider#metadata_host}

---

##### `msi_endpoint`<sup>Optional</sup> <a name="msi_endpoint" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.msiEndpoint"></a>

```python
msi_endpoint: str
```

- *Type:* str

The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#msi_endpoint AzurestackProvider#msi_endpoint}

---

##### `skip_provider_registration`<sup>Optional</sup> <a name="skip_provider_registration" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.skipProviderRegistration"></a>

```python
skip_provider_registration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the AzureStack Provider skip registering all of the Resource Providers that it supports, if they're not already registered?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#skip_provider_registration AzurestackProvider#skip_provider_registration}

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

The Subscription ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#subscription_id AzurestackProvider#subscription_id}

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

The Tenant ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#tenant_id AzurestackProvider#tenant_id}

---

##### `use_msi`<sup>Optional</sup> <a name="use_msi" id="@cdktf/provider-azurestack.provider.AzurestackProviderConfig.property.useMsi"></a>

```python
use_msi: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allowed Managed Service Identity be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#use_msi AzurestackProvider#use_msi}

---

### AzurestackProviderFeatures <a name="AzurestackProviderFeatures" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import provider

provider.AzurestackProviderFeatures(
  resource_group: AzurestackProviderFeaturesResourceGroup = None,
  virtual_machine: AzurestackProviderFeaturesVirtualMachine = None,
  virtual_machine_scale_set: AzurestackProviderFeaturesVirtualMachineScaleSet = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.property.resourceGroup">resource_group</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesResourceGroup">AzurestackProviderFeaturesResourceGroup</a></code> | resource_group block. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.property.virtualMachine">virtual_machine</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine">AzurestackProviderFeaturesVirtualMachine</a></code> | virtual_machine block. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.property.virtualMachineScaleSet">virtual_machine_scale_set</a></code> | <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet">AzurestackProviderFeaturesVirtualMachineScaleSet</a></code> | virtual_machine_scale_set block. |

---

##### `resource_group`<sup>Optional</sup> <a name="resource_group" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.property.resourceGroup"></a>

```python
resource_group: AzurestackProviderFeaturesResourceGroup
```

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesResourceGroup">AzurestackProviderFeaturesResourceGroup</a>

resource_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#resource_group AzurestackProvider#resource_group}

---

##### `virtual_machine`<sup>Optional</sup> <a name="virtual_machine" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.property.virtualMachine"></a>

```python
virtual_machine: AzurestackProviderFeaturesVirtualMachine
```

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine">AzurestackProviderFeaturesVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#virtual_machine AzurestackProvider#virtual_machine}

---

##### `virtual_machine_scale_set`<sup>Optional</sup> <a name="virtual_machine_scale_set" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeatures.property.virtualMachineScaleSet"></a>

```python
virtual_machine_scale_set: AzurestackProviderFeaturesVirtualMachineScaleSet
```

- *Type:* <a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet">AzurestackProviderFeaturesVirtualMachineScaleSet</a>

virtual_machine_scale_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#virtual_machine_scale_set AzurestackProvider#virtual_machine_scale_set}

---

### AzurestackProviderFeaturesResourceGroup <a name="AzurestackProviderFeaturesResourceGroup" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesResourceGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesResourceGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import provider

provider.AzurestackProviderFeaturesResourceGroup(
  prevent_deletion_if_contains_resources: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesResourceGroup.property.preventDeletionIfContainsResources">prevent_deletion_if_contains_resources</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#prevent_deletion_if_contains_resources AzurestackProvider#prevent_deletion_if_contains_resources}. |

---

##### `prevent_deletion_if_contains_resources`<sup>Optional</sup> <a name="prevent_deletion_if_contains_resources" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesResourceGroup.property.preventDeletionIfContainsResources"></a>

```python
prevent_deletion_if_contains_resources: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#prevent_deletion_if_contains_resources AzurestackProvider#prevent_deletion_if_contains_resources}.

---

### AzurestackProviderFeaturesVirtualMachine <a name="AzurestackProviderFeaturesVirtualMachine" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import provider

provider.AzurestackProviderFeaturesVirtualMachine(
  delete_os_disk_on_deletion: typing.Union[bool, IResolvable] = None,
  graceful_shutdown: typing.Union[bool, IResolvable] = None,
  skip_shutdown_and_force_delete: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.property.deleteOsDiskOnDeletion">delete_os_disk_on_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#delete_os_disk_on_deletion AzurestackProvider#delete_os_disk_on_deletion}. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.property.gracefulShutdown">graceful_shutdown</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#graceful_shutdown AzurestackProvider#graceful_shutdown}. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.property.skipShutdownAndForceDelete">skip_shutdown_and_force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#skip_shutdown_and_force_delete AzurestackProvider#skip_shutdown_and_force_delete}. |

---

##### `delete_os_disk_on_deletion`<sup>Optional</sup> <a name="delete_os_disk_on_deletion" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.property.deleteOsDiskOnDeletion"></a>

```python
delete_os_disk_on_deletion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#delete_os_disk_on_deletion AzurestackProvider#delete_os_disk_on_deletion}.

---

##### `graceful_shutdown`<sup>Optional</sup> <a name="graceful_shutdown" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.property.gracefulShutdown"></a>

```python
graceful_shutdown: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#graceful_shutdown AzurestackProvider#graceful_shutdown}.

---

##### `skip_shutdown_and_force_delete`<sup>Optional</sup> <a name="skip_shutdown_and_force_delete" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachine.property.skipShutdownAndForceDelete"></a>

```python
skip_shutdown_and_force_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#skip_shutdown_and_force_delete AzurestackProvider#skip_shutdown_and_force_delete}.

---

### AzurestackProviderFeaturesVirtualMachineScaleSet <a name="AzurestackProviderFeaturesVirtualMachineScaleSet" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import provider

provider.AzurestackProviderFeaturesVirtualMachineScaleSet(
  roll_instances_when_required: typing.Union[bool, IResolvable],
  force_delete: typing.Union[bool, IResolvable] = None,
  scale_to_zero_before_deletion: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.property.rollInstancesWhenRequired">roll_instances_when_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#roll_instances_when_required AzurestackProvider#roll_instances_when_required}. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.property.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#force_delete AzurestackProvider#force_delete}. |
| <code><a href="#@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.property.scaleToZeroBeforeDeletion">scale_to_zero_before_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#scale_to_zero_before_deletion AzurestackProvider#scale_to_zero_before_deletion}. |

---

##### `roll_instances_when_required`<sup>Required</sup> <a name="roll_instances_when_required" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.property.rollInstancesWhenRequired"></a>

```python
roll_instances_when_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#roll_instances_when_required AzurestackProvider#roll_instances_when_required}.

---

##### `force_delete`<sup>Optional</sup> <a name="force_delete" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.property.forceDelete"></a>

```python
force_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#force_delete AzurestackProvider#force_delete}.

---

##### `scale_to_zero_before_deletion`<sup>Optional</sup> <a name="scale_to_zero_before_deletion" id="@cdktf/provider-azurestack.provider.AzurestackProviderFeaturesVirtualMachineScaleSet.property.scaleToZeroBeforeDeletion"></a>

```python
scale_to_zero_before_deletion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs#scale_to_zero_before_deletion AzurestackProvider#scale_to_zero_before_deletion}.

---



